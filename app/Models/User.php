<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Cache;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'first_name',
        'last_name',
        'avatar',
        'status',
        'mobile_number',
    ];


    public function getAvatarAttribute($val)
    {
        return $val == null ? asset('assets/images/dummy.png') : asset("storage/uplaods/images/user/" . $val);
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'created_at' => 'datetime:Y-m-d H:i:s'
    ];

    public function scopeActive($query)
    {
        return $query->where('status', true);
    }

    public static function usersCount($update = false)
    {
        if ($update) {
            $usersCount = Cache::put('users_count', self::where('role', 'user')->count(), (60 * 60 * 3));
        } else {
            $usersCount = Cache::remember('users_count', (60 * 60 * 3), function () {
                return self::where('role', 'user')->count();
            });
        }
        return $usersCount;
    }
}
