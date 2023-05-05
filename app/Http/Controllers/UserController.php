<?php

namespace App\Http\Controllers;

use App\Http\Requests\Admin\UserCreateRequest;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    public $module = 'User';
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */

    public function index()
    {
        $search = request()->search ?? '';
        $current_page = request()->current_page ?? '';
        $users = User::where('role', '!=', 'admin')->when(isset(request()->search) && !empty(request()->search), function ($query) {
            $query->where(function ($query) {
                $query->where('name', 'like', '%' . request()->search . '%')
                    ->orWhere('email', 'like', '%' . request()->search . '%');
            });
        })->orderBy('id', 'desc')->paginate(10)->onEachSide(1);
        $users->appends(request()->query());
        $data = [
            'users' => $users,
            'module' => 'Users',
            'breadcrumbs' => ['Users'],
            'current_page' => $current_page,
            'search' => $search,
            'flash_message' => session('flash_message'),
        ];
        if (request()->expectsJson()) {
            return response()->json($data);
        }
        return Inertia::render('Admin/Users/Index', $data);
    }

    /**
     * Write code on Method
     *
     * @return response()
     */
    public function create()
    {
        $data = ['module' => 'Create User', 'breadcrumbs' => ['Users', 'Create User']];
        return Inertia::render('Admin/Users/Create', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function store(UserCreateRequest $request)
    {
        $data = $request->validated();
        $data['password'] = Hash::make($request->password);
        $data['name'] = "$request->first_name $request->last_name";
        if ($request->hasFile('avatar')) {
            $imagePath = $request->file('avatar')->store('public/uplaods/images/user');
            $data['avatar'] = basename($imagePath);
        }
        unset($data['password_confirmation']);
        User::create($data);
        User::usersCount(true);
        return redirect()->route('admin.users.index')
            ->with(['flash_message' => ['status' => true, 'message' => "$this->module created successfully."]]);
    }

    /**
     * Write code on Method
     *
     * @return response()
     */
    public function edit(User $user)
    {
        $data = ['module' => 'Edit User', 'user' => $user, 'breadcrumbs' => ['Users', 'Edit User']];
        return Inertia::render('Admin/Users/Edit', $data);
    }

    public function show(User $user)
    {
        $data = ['module' => 'User Detail', 'user' => $user, 'breadcrumbs' => ['Users', 'User Detail']];
        return Inertia::render('Admin/Users/Show', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function update($id, UserCreateRequest $request)
    {
        $user = User::where('id', $id)->first();
        if ($user == null) {
            abort(404);
        }

        $requestData = $request->only('first_name', 'last_name', 'email', 'mobile_number');
        $requestData['name'] = $request->first_name . ' ' . $request->last_name;
        if (isset($request->password) && !empty($request->password)) {
            // if (!Hash::check($request->current_password, $user->password)) {
            //     throw ValidationException::withMessages([
            //         'current_password' => 'Invalid current password',
            //     ]);
            // }
            $requestData['password'] = Hash::make($request->password);
        }
        if ($request->hasFile('avatar')) {
            $avatar = $user->getAttributes()['avatar'] ?? null;
            if ($avatar != null) {
                unlink(storage_path('app/public/uplaods/images/user/' . $avatar));
            }
            $imagePath = $request->file('avatar')->store('public/uplaods/images/user');
            $requestData['avatar'] = basename($imagePath);
        }
        $user->update($requestData);
        return redirect()->route('admin.users.index')
            ->with(['flash_message' => ['status' => true, 'message' => "$this->module updated successfully."]]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function delete($id)
    {
        $user = User::where('id', $id)->first();
        if ($user == null) {
            abort(404);
        }
        $avatar = $user->getAttributes()['avatar'] ?? null;
        if ($avatar != null) {
            unlink(storage_path('app/public/uplaods/images/user/' . $avatar));
        }
        $user->delete();
        return redirect()->route('admin.users.index')
            ->with(['flash_message' => ['status' => true, 'message' => "$this->module deleted successfully."]]);
    }

    public function updateStatus(Request $request)
    {
        $user = User::where('id', $request->id)->first();
        if ($user == null) {
            return response()->json(['status' => false, 'message' => "Data not found."]);
        }
        $user->update(['status' => (!$user->status)]);
        return response()->json(['status' => true, 'message' => "Success"]);
    }
}
