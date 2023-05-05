<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UserCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        $rulesData = [
            'first_name' => 'required|string|max:100',
            'last_name' => 'required|string|max:100',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => 'required|min:8',
            'mobile_number' => ['nullable', 'regex:/^(?:(?:\+|00)([1-9]\d{0,2}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})$/'],
            'avatar' => 'nullable|image|mimes:png,jpeg,gif,jpg,svg',
        ];
        if (isset(request()->id) && !empty(request()->id)) {
            $rulesData['password'] = 'nullable|min:8';
            $rulesData['email'] = 'required|string|email|max:255|unique:users,email,' . request()->id;
        }
        return $rulesData;
    }
}
