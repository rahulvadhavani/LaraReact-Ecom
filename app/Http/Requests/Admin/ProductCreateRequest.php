<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;


class ProductCreateRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:10000',
            'thumbnail' => 'nullable|image|mimes:png,jpeg,gif,jpg,svg,webp|max:2048',
            'category_id' => 'required|exists:categories,id',
            'price' => 'required|numeric|max:999999.99',
            'description' => 'required|min:10',
            'quantity' => 'nullable|integer|min:1|max:999999999',
            'attributes' => 'nullable|array',
            'images' => 'nullable|array',
        ];
        return $rulesData;
    }
    public function attributes()
    {
        return [
            'category_id' => 'category',
            'quantity' => 'stock quantity',
        ];
    }
}
