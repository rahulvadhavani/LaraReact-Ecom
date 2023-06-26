<?php

namespace App\Http\Middleware;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        // dd(parent::share($request));
        $sharedData =  [
            'shared_data' => [],
            'app_name' => config('app.name'),
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ];
        if ($request->routeIs('home', 'products','products', 'about-us', 'contact-us', 'account', 'wishlist','product.detail')) {
            $categories = Category::active()->get();
            $sharedData['shared_data'] = ['categories' => $categories];
        }
        return array_merge(parent::share($request), $sharedData);
    }
}
