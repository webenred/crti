<?php

namespace App\Http\Requests\Manage\Division;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateDivisionRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string',],
            'abbr' => ['required', 'string'],
            'description' => ['required', 'string'],
            'members' => ['nullable', 'array'],
            'members.*' => ['nullable', 'array'],
            'members.*.uuid' => ['sometimes', 'string', Rule::exists('users', 'uuid')],
            'members.*.grade' => ['sometimes', 'string'],
        ];
    }
}
