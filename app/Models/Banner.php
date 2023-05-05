<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    use HasFactory;

    protected $fillable = ['banner', 'data', 'type', 'status'];
    const STORAGE_PATH = "/app/public/uplaods/images/banner/";
    const UPLOAD_PATH = "public/uplaods/images/banner";
    const LINK_PATH = "storage/uplaods/images/banner/";

    protected $casts = [
        'data' => 'array',
        'created_at' => 'datetime:Y-m-d H:i:s'
    ];

    public function getBannerAttribute($val)
    {
        return $val == null ? asset('assets/images/dummy.png') : asset(self::LINK_PATH . $val);
    }

    public function scopeActive($query)
    {
        return $query->where('status', true);
    }
}
