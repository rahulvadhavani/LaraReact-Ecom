<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'attributes', 'variants', 'slug', 'description', 'price', 'category_id', 'user_id', 'images', 'thumbnail', 'is_featured', 'quantity', 'sku', 'status'];
    const STORAGE_PATH = "/app/public/uplaods/images/product/";
    const UPLOAD_PATH = "public/uplaods/images/product";
    const LINK_PATH = "storage/uplaods/images/product/";

    protected $casts = [
        'attributes' => 'array',
        'images' => 'array',
        'created_at' => 'datetime:Y-m-d H:i:s'
    ];

    public function getThumbnailAttribute($val)
    {
        return $val == null ? asset('assets/images/dummy.png') : asset(self::LINK_PATH . $val);
    }

    public function scopeActive($query)
    {
        return $query->where('status', true);
    }

    public function getImagesAttribute($val)
    {
        $images = collect(json_decode($val))->map(function ($image) {
            return asset(self::LINK_PATH . $image);
        });
        return $val == null ? [] : $images;
    }

    public function category()
    {
        return $this->hasOne(Category::class, 'id', 'category_id');
    }

    public static function deleteFiles($files)
    {
        if (empty($files)) {
            return false;
        }
        if (!is_array($files)) {
            $files = [basename($files)];
        }

        foreach ($files as $img) {
            $file_path =  storage_path(self::STORAGE_PATH . basename($img));
            if (file_exists($file_path)) {
                unlink($file_path);
            }
        }
    }

    public static function productsCount($update = false)
    {
        if ($update) {
            $productsCount = Cache::put('products_count', self::count(), (60 * 60 * 3));
        } else {
            $productsCount = Cache::remember('products_count', (60 * 60 * 24), function () {
                return self::count();
            });
        }
        return $productsCount;
    }
}
