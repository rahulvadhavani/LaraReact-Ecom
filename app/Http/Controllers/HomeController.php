<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function dashboard()
    {
        $usersCount = User::usersCount();
        $productsCount = Product::productsCount();
        $categoriesCount = Category::categoriesCount();
        $statistics = [
            ['module' => 'Users', 'route' => route('admin.users.index'), 'count' => $usersCount, 'class' => 'fa-users', 'color' => 'blue'],
            ['module' => 'Categories', 'route' => route('admin.categories.index'), 'count' => $categoriesCount, 'class' => 'fa-shapes   ', 'color' => 'green'],
            ['module' => 'Products', 'route' => route('admin.products.index'), 'count' => $productsCount, 'class' => 'fa-cart-shopping', 'color' => 'yellow'],
        ];
        $data = ['module' => 'Dashboard', 'breadcrumbs' => ['Dashboard'], 'statistics' => $statistics];
        if (request()->expectsJson()) {
            return response()->json($data);
        }
        return Inertia::render('Admin/Dashboard', $data);
    }
}
