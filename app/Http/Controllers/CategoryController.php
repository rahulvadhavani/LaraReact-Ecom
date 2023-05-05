<?php

namespace App\Http\Controllers;

use App\Http\Requests\Admin\CategoryCreateRequest;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public $module = 'Category';

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function index()
    {
        $search = request()->search ?? '';
        $current_page = request()->current_page ?? '';
        $categories = Category::withcount('products')->when(!empty($search), function ($query) use ($search) {
            $query->where('name', 'like', '%' . $search . '%');
        })->orderBy('id', 'desc')->paginate(10)->onEachSide(1);

        $categories->appends(request()->query());
        $data = [
            'categories' => $categories,
            'module' => 'Categories',
            'breadcrumbs' => ['Categories'],
            'current_page' => $current_page,
            'search' => $search,
            'flash_message' => session('flash_message'),
        ];
        if (request()->expectsJson()) {
            return response()->json($data);
        }
        return Inertia::render('Admin/Category/Index', $data);
    }

    /**
     * Write code on Method
     *
     * @return response()
     */
    public function create()
    {
        $data = ['module' => 'Create Category', 'breadcrumbs' => ['Category', 'Create Category']];
        return Inertia::render('Admin/Category/Create', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function store(CategoryCreateRequest $request)
    {
        $data = $request->validated();
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store(Category::UPLOAD_PATH);
            $data['image'] = basename($imagePath);
        }
        Category::create($data);
        Category::categoriesCount(true);
        return redirect()->route('admin.categories.index')
            ->with(['flash_message' => ['status' => true, 'message' => "$this->module created successfully."]]);
    }

    /**
     * Write code on Method
     *
     * @return response()
     */
    public function edit(Category $category)
    {
        $data = ['category' => $category, 'module' => 'Edit Category', 'breadcrumbs' => ['Category', 'Edit Category']];
        return Inertia::render('Admin/Category/Edit', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function update($id, CategoryCreateRequest $request)
    {
        $category = Category::where('id', $id)->first();
        if ($category == null) {
            abort(404);
        }
        $data = $request->validated();
        if ($request->hasFile('image')) {
            $image = $category->getAttributes()['image'] ?? null;
            $imagePath = $request->file('image')->store(Category::UPLOAD_PATH);
            $file_path =  storage_path(Category::STORAGE_PATH . $image);
            if ($image != null && file_exists($file_path)) {
                unlink($file_path);
            }
            $data['image'] = basename($imagePath);
        }
        $category->update($data);
        return redirect()->route('admin.categories.index')
            ->with(['flash_message' => ['status' => true, 'message' => "$this->module updated successfully."]]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function delete($id)
    {
        $category = Category::where('id', $id)->first();
        if ($category == null) {
            abort(404);
        }
        $category->delete();
        return redirect()->route('admin.categories.index')
            ->with(['flash_message' => ['status' => true, 'message' => "$this->module deleted successfully."]]);
    }

    public function updateStatus(Request $request)
    {
        $category = Category::where('id', $request->id)->first();
        if ($category == null) {
            return response()->json(['status' => false, 'message' => "Data not found."]);
        }
        $category->update(['status' => (!$category->status)]);
        return response()->json(['status' => true, 'message' => "Success"]);
    }
}
