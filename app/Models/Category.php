<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class Category extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'status', 'image', 'slug'];

    const STORAGE_PATH = "/app/public/uplaods/images/category/";
    const UPLOAD_PATH = "public/uplaods/images/category";
    const LINK_PATH = "storage/uplaods/images/category/";

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s'
    ];


    public function scopeActive($query)
    {
        return $query->where('status', true);
    }

    public function getImageAttribute($val)
    {
        return $val == null ? asset('assets/images/dummy.png') : asset("storage/uplaods/images/category/" . $val);
    }

    public function setNameAttribute($name)
    {
        $this->attributes['name'] = $name;
        $this->attributes['slug'] = self::generateUniqueSlug($name);
    }

    public static function generateUniqueSlug($title)
    {
        $slug = \Str::slug($title, '-');
        $count = 0;

        while (self::slugExists($slug)) {
            $count++;
            $slug = \Str::slug($title, '-') . '-' . $count;
        }

        return $slug;
    }

    public static function slugExists($slug)
    {
        return static::where('slug', $slug)->exists();
    }

    public static function categoriesCount($update = false)
    {
        if ($update) {
            $categoriesCount = Cache::put('categories_count', self::count(), (60 * 60 * 3));
        } else {
            $categoriesCount = Cache::remember('categories_count', (60 * 60 * 24), function () {
                return self::count();
            });
        }
        return $categoriesCount;
    }

    public function products()
    {
        return $this->belongsTo(Product::class, 'id', 'category_id');
    }
}
