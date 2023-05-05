<?php

namespace App\Http\Controllers;

use App\Http\Requests\Admin\ProductCreateRequest;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class ProductController extends Controller
{

    public $module = "Product";

    /**
     * Show the Data.
     *
     * @return Response
     */

    public function index(Request $request)
    {
        $sortBy = $request->input('sort_by', 'id');
        $sortOrder = $request->input('sort_order', 'desc');
        if (!in_array($sortBy, ['name', 'price', 'quantity', 'status', 'created_at'])) {
            $sortBy = 'id';
            $sortOrder = 'desc';
        }
        $search = request()->search ?? '';
        $current_page = request()->current_page ?? '';
        $products = Product::with('category')->when(isset(request()->search) && !empty(request()->search), function ($query) {
            $query->where(function ($query) {
                $query->where('name', 'like', '%' . request()->search . '%');
            });
        })
            ->orderBy($sortBy, $sortOrder)
            ->paginate(10)->onEachSide(1);

        $products->appends(request()->query());

        $data = [
            'products' => $products,
            'module' => 'Products',
            'breadcrumbs' => ['Products'],
            'current_page' => $current_page,
            'search' => $search,
            'sortBy' => $sortBy,
            'sortOrder' => $sortOrder,
            'flash_message' => session('flash_message'),
        ];
        if (request()->expectsJson()) {
            return response()->json($data);
        }
        return Inertia::render('Admin/Products/Index', $data);
    }

    /**
     * Create view show
     *
     * @return response()
     */
    public function create()
    {
        $categories = Category::orderBy('name', 'asc')->get();
        $data = ['module' => 'Create Product', 'categories' => $categories, 'breadcrumbs' => ['Products', 'Create Product']];
        return Inertia::render('Admin/Products/Create', $data);
    }

    /**
     * Store resource 
     *
     * @return Response
     */
    public function store(ProductCreateRequest $request)
    {

        $validator = Validator::make($request->all(), [
            'attributes.*.key' => 'nullable|min:1|max:40',
            'attributes.*.value' => 'nullable|min:1|max:40',
            'images.*' => 'nullable|image|mimes:png,jpeg,gif,jpg,svg,webp|max:2048',
        ]);

        if ($validator->fails()) {
            $messages = [];
            if ($validator->messages()->has('attributes.*')) {
                $messages['attributes'] = 'The attributes key and value field must not be greater than 40 characters';
            }
            if ($validator->messages()->has('images.*')) {
                $messages['images'] = 'The images field must not be greater than 2 MB and and allow png,jpeg,gif,jpg,svg files';
            }
            $error = \Illuminate\Validation\ValidationException::withMessages($messages);
            throw $error;
        }
        $data = $request->validated();
        $imagesArr = [];
        if (isset($request->images)) {
            foreach ($request->images as $image) {
                $path = $image->store(Product::UPLOAD_PATH);
                $imagesArr[] = basename($path);
            }
        }

        unset($data['images']);
        if (count($imagesArr) > 0) {
            $data['images'] = $imagesArr;
        }

        $data['user_id'] = auth()->user()->id;
        if ($request->hasFile('thumbnail')) {
            $imagePath = $request->file('thumbnail')->store(Product::UPLOAD_PATH);
            $data['thumbnail'] = basename($imagePath);
        }
        Product::create($data);
        Product::productsCount(true);
        return redirect()->route('admin.products.index')
            ->with(['flash_message' => ['status' => true, 'message' => "$this->module created successfully."]]);
    }

    /**
     * Show edit page
     *
     * @return response()
     */
    public function edit(Product $product)
    {
        $categories = Category::orderBy('name', 'asc')->get();
        $data = [
            'categories' => $categories,
            'module' => 'Edit Product',
            'product' => $product,
            'breadcrumbs' => ['Products', 'Edit Product'],
        ];
        return Inertia::render('Admin/Products/Edit', $data);
    }

    public function show($id)
    {
        $product = Product::with('category')->where('id', $id)->first();
        if ($product == null) {
            abort(404);
        }
        $groupedData = collect($product->attributes)->groupBy('key')->map(function ($val) {
            return $val->pluck('value');
        })->toArray();
        $product->attributes = $groupedData;
        $data = ['module' => 'Product Detail', 'product' => $product, 'breadcrumbs' => ['Products', 'Product Detail']];
        return Inertia::render('Admin/Products/Show', $data);
    }

    /**
     * Update the resource.
     *
     * @return Response
     */
    public function update($id, ProductCreateRequest $request)
    {
        // valdiate images array that contain file or url
        $validator = Validator::make($request->all(), [
            'attributes.*.key' => 'nullable|min:1|max:40',
            'attributes.*.value' => 'nullable|min:1|max:40',
            'images.*' => [
                'nullable',
                function ($attribute, $value, $fail) {
                    if (is_string($value) && filter_var($value, FILTER_VALIDATE_URL) === false) {
                        $fail($attribute . ' must be a valid URL or a file.');
                    } elseif ($value instanceof UploadedFile) {
                        $allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'];
                        $allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp'];
                        $extension = strtolower($value->getClientOriginalExtension());
                        $mimeType = strtolower($value->getClientMimeType());
                        if (!in_array($extension, $allowedExtensions) || !in_array($mimeType, $allowedMimeTypes)) {
                            $fail($attribute . ' must be a file of type: ' . implode(',', $allowedExtensions) . '.');
                        } elseif ($value->getSize() > (2 * (1024 * 1024))) {
                            $fail($attribute . ' may not be greater than 2 MB.');
                        }
                    }
                },
            ],
        ]);

        if ($validator->fails()) {
            $messages = [];
            if ($validator->messages()->has('attributes.*')) {
                $messages['attributes'] = 'The attributes key and value field must not be greater than 40 characters';
            }
            if ($validator->messages()->has('images.*')) {
                $messages['images'] = 'The images field must not be greater than 2 MB and and allow ony png,jpeg,gif,jpg,svg files';
            }
            $error = \Illuminate\Validation\ValidationException::withMessages($messages);
            throw $error;
        }

        $data = $request->validated();
        $product = Product::where('id', $id)->first();
        if ($product == null) {
            abort(404);
        }

        $newImages = [];
        $inputImages = [];

        // dd($product->images);
        $productImages = empty($product->images) ? [] : $product->images->map(function ($image) {
            return basename($image);
        })->toArray() ?? [];
        foreach ($request->images as $image) {
            if (filter_var($image, FILTER_VALIDATE_URL) == true) {
                $inputImages[] = basename($image);
            } else {
                $newImages[] = $image;
            }
        }

        $productImagesShouldDelete = array_diff($productImages, $inputImages);

        // insert file
        foreach ($newImages as $image) {
            $path = $image->store(Product::UPLOAD_PATH);
            $inputImages[] = basename($path);
        }

        // delete file
        Product::deleteFiles($productImagesShouldDelete);

        if (count($inputImages) > 0) {
            $data['images'] = $inputImages;
        }

        if ($request->hasFile('thumbnail')) {
            $thumbnailImg = $product->getAttributes()['thumbnail'] ?? null;
            $imagePath = $request->file('thumbnail')->store(Product::UPLOAD_PATH);
            Product::deleteFiles($thumbnailImg);
            $data['thumbnail'] = basename($imagePath);
        } else {
            unset($data['thumbnail']);
        }
        $product->update($data);
        return redirect()->route('admin.products.index')
            ->with(['flash_message' => ['status' => true, 'message' => "$this->module updated successfully."]]);
    }

    /**
     * Delete resource.
     *
     * @return Response
     */
    public function delete($id)
    {
        $product = Product::where('id', $id)->first();
        if ($product == null) {
            abort(404);
        }
        $images = $product->getAttributes()['images'] ?? [];
        $thumbnail = $product->getAttributes()['thumbnail'] ?? null;
        Product::deleteFiles($images);
        if ($thumbnail != null) {
            Product::deleteFiles($thumbnail);
        }
        $product->delete();
        return redirect()->route('admin.products.index')
            ->with(['flash_message' => ['status' => true, 'message' => "$this->module deleted successfully."]]);
    }

    /**
     * Update status
     *
     * @return Response
     */
    public function updateStatus(Request $request)
    {
        $product = Product::where('id', $request->id)->first();
        if ($product == null) {
            return response()->json(['status' => false, 'message' => "Data not found."]);
        }
        $product->update(['status' => (!$product->status)]);
        return response()->json(['status' => true, 'message' => "Success"]);
    }

    /**
     * Update field inline
     *
     * @return Response
     */
    public function updateField(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'quantity' => 'required|integer|min:1|digits_between: 1,9',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => false, 'message' => $validator->errors()]);
        }
        $inputData = $request->only('quantity');
        $product = Product::where('id', $request->id)->first();
        if ($product == null) {
            return response()->json(['status' => false, 'message' => "Data not found."]);
        }
        $product->update($inputData);
        return response()->json(['status' => true, 'message' => "Success"]);
    }
}
