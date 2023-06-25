<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $products = Product::active()->orderBy('id', 'desc')->take(8)->get();
        $recomendedProducts = Product::active()->take(8)->get();
        $categories = Category::active()->get();
        $banners = Banner::active()->where('type', 'slider')->get()->toArray();
        $page_data = [
            'products' => $products,
            'recomendedProducts' => $recomendedProducts,
            'categories' => $categories,
            'banners' => $banners,
        ];
        $data = ['module' => 'Home', 'breadcrumbs' => ['Home'], 'page_data' => $page_data];
        return Inertia::render('FrontEnd/Home', $data);
    }

    // public function products()
    // {
    //     $category = array_filter(explode(',',request()->category));
    //     $products = Product::with('category')->active()
    //         ->when(!empty($category), function ($query) use ($category) {
    //             $query->whereHas('category', function ($query) use ($category) {
    //                 $query->whereIn('slug', $category);
    //             });
    //         })
    //         ->paginate(10);
    //     $categories = Category::active()->get();
    //     $page_data = [
    //         'products' => $products,
    //         'categories' => $categories,
    //         'search_category' => $category,
    //     ];
    //     $data = ['module' => 'Products', 'breadcrumbs' => ['Home', 'Products'], 'page_data' => $page_data];
    //     return Inertia::render('FrontEnd/Products', $data);
    // }

    // public function productsFilter()
    // {
    //     $category = !empty(request()->category) ?  array_filter(request()->category) : [];
    //     $products = Product::with('category')->active()
    //         ->when(!empty($category), function ($query) use ($category) {
    //             $query->whereHas('category', function ($query) use ($category) {
    //                 $query->whereIn('slug', $category);
    //             });
    //         })
    //         ->paginate(10);
    //     $page_data = [
    //         'products' => $products,
    //     ];
    //     return response()->json(['status' => true,'message' => 'success' , 'data' => $page_data ]);
    // }

    public function products()
    {
        $categories = Category::active()->get();
        $filterData = request()->only('page', 'category');
        if (isset($filterData['category'])) {
            $filterData['category'] = explode(',', $filterData['category']);
        }

        $page_data = [
            'categories' => $categories,
            'filterData' => $filterData
        ];
        $data = ['module' => 'Products', 'breadcrumbs' => ['Home', 'Products'], 'page_data' => $page_data];
        return Inertia::render('FrontEnd/Products', $data);
    }

    public function productsFilter(Request $request)
    {
        $category = !empty(request()->category) ?  array_filter(request()->category) : [];
        $products = Product::with('category')->active()
            ->when(!empty($category), function ($query) use ($category) {
                $query->whereHas('category', function ($query) use ($category) {
                    $query->whereIn('slug', $category);
                });
            })
            ->when($request->has('min_price'), function ($query) {
                $query->where('price', '>=', request()->input('min_price'));
            })
            ->when($request->has('max_price'), function ($query) {
                $query->where('price', '<=', request()->input('max_price'));
            })
            ->when($request->has('sort'), function ($query) {
                $query->when(request()->sort == 'price-high-to-low', function ($query) {
                    $query->orderBy('price', 'DESC');
                })->when(request()->sort == 'price-low-to-high', function ($query) {
                    $query->orderBy('price', 'ASC');
                })->when(request()->sort == 'latest', function ($query) {
                    $query->orderBy('created_at', 'DESC');
                });
            })
            ->paginate(10);
        $page_data = [
            'products' => $products,
        ];
        return response()->json(['status' => true, 'message' => 'success', 'data' => $page_data]);
    }

    public function productDetail($id)
    {
        $product = Product::with('category')->where('id', $id)->first();
        if ($product == null) {
            abort(404);
        }
        $groupedData = collect($product->attributes)->groupBy('key')->map(function ($val) {
            return $val->pluck('value');
        })->toArray();
        $product->attributes = $groupedData;
        $relatedProducts = Product::active()->take(8)->get();
        $page_data = [
            'product' => $product,
            'relatedProducts' => $relatedProducts,
        ];
        $data = ['module' => 'Product', 'breadcrumbs' => ['Home', 'Product'], 'page_data' => $page_data];
        return Inertia::render('FrontEnd/ProductDetail', $data);
    }

    public function aboutUs()
    {
        $page_data = [];
        $data = ['module' => 'About-Us', 'breadcrumbs' => ['Home', 'About-Us'], 'page_data' => $page_data];
        return Inertia::render('FrontEnd/About', $data);
    }

    public function contactUs()
    {
        $page_data = [];
        $data = ['module' => 'Contact', 'breadcrumbs' => ['Home', 'Contact-Us'], 'page_data' => $page_data];
        return Inertia::render('FrontEnd/Contact', $data);
    }

    public function account()
    {
        $page_data = [];
        $data = ['module' => 'Account', 'breadcrumbs' => ['Home', 'Account'], 'page_data' => $page_data];
        return Inertia::render('FrontEnd/Wishlist', $data);
    }

    public function wishlist()
    {
        $page_data = [];
        $data = ['module' => 'Wishlist', 'breadcrumbs' => ['Home', 'Wishlist'], 'page_data' => $page_data];
        return Inertia::render('FrontEnd/Wishlist', $data);
    }

    public function cart()
    {
        $page_data = [];
        $data = ['module' => 'Cart', 'breadcrumbs' => ['Home', 'Cart'], 'page_data' => $page_data];
        return Inertia::render('FrontEnd/Account', $data);
    }
}
