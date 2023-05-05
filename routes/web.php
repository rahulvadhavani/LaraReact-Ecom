<?php

use App\Http\Controllers\Auth\RedirectAuthenticatedUsersController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\Client\HomeController as ClientHomeController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/





Route::get('/admin', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::group([], function () {
    Route::get('/', [ClientHomeController::class, 'index'])->name('home');
    Route::get('/products', [ClientHomeController::class, 'products'])->name('products');
    Route::get('/product/{id}', [ClientHomeController::class, 'productDetail'])->name('product.detail');
    Route::get('/about-us', [ClientHomeController::class, 'aboutUs'])->name('about-us');
    Route::get('/contact-us', [ClientHomeController::class, 'contactUs'])->name('contact-us');
    Route::get('/account', [ClientHomeController::class, 'account'])->name('account');
    Route::get('/wishlist', [ClientHomeController::class, 'wishlist'])->name('wishlist');
    Route::get('/cart', [ClientHomeController::class, 'cart'])->name('cart');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get("/redirectAuthenticatedUsers", [RedirectAuthenticatedUsersController::class, "home"]);
Route::group(['middleware' => 'auth'], function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::prefix('admin')->name('admin.')->middleware('checkRole:admin')->group(function () {
        Route::get('dashboard', [HomeController::class, 'dashboard'])->name('dashboard');

        Route::resource('users', UserController::class);
        Route::get('users/delete/{id}', [UserController::class, 'delete'])->name('users.delete');
        Route::post('users/update-status', [UserController::class, 'updateStatus'])->name('users.update_status');

        Route::resource('products', ProductController::class);
        Route::get('products/delete/{id}', [ProductController::class, 'delete'])->name('products.delete');
        Route::post('products/update-status', [ProductController::class, 'updateStatus'])->name('products.update_status');
        Route::post('products/update-field', [ProductController::class, 'updateField'])->name('products.update-field');

        Route::resource('categories', CategoryController::class);
        Route::get('categories/delete/{id}', [CategoryController::class, 'delete'])->name('categories.delete');
        Route::post('categories/update-status', [CategoryController::class, 'updateStatus'])->name('categories.update_status');

        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });
    Route::group(['middleware' => 'checkRole:user'], function () {
        Route::inertia('/dashboard', 'Dashboard')->name('dashboard');
    });
});

Route::get('/components/buttons', function () {
    return Inertia::render('Components/Buttons');
})->middleware(['auth', 'verified'])->name('components.buttons');

require __DIR__ . '/auth.php';
