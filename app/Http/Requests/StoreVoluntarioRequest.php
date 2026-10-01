<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVoluntarioRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'nombres' => ['required', 'string', 'max:255'],
            'apellidos' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', 'unique:voluntarios,email'],
            'telefono' => ['nullable', 'string', 'max:50'],
            'direccion' => ['nullable', 'string', 'max:255'],
            'interes_actividad' => ['nullable', 'string', 'max:255'],
            'motivacion' => ['nullable', 'string', 'max:1000'],
            // Desafío Anti-Spam y Honeypot
            'desafio_num1' => ['required', 'integer'],
            'desafio_num2' => ['required', 'integer'],
            'desafio_respuesta' => ['required', 'integer'],
            'b_website' => ['nullable', 'max:0'],
        ];
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            $num1 = (int) $this->input('desafio_num1');
            $num2 = (int) $this->input('desafio_num2');
            $userRes = (int) $this->input('desafio_respuesta');

            if ($userRes !== ($num1 + $num2)) {
                $validator->errors()->add('desafio_respuesta', 'La respuesta al desafío de seguridad no es correcta.');
            }

            if (!empty($this->input('b_website'))) {
                $validator->errors()->add('b_website', 'Spam detectado.');
            }
        });
    }

    public function messages(): array
    {
        return [
            'nombres.required' => 'Por favor ingresa tus nombres.',
            'apellidos.required' => 'Por favor ingresa tus apellidos.',
            'email.required' => 'El correo electrónico es obligatorio.',
            'email.email' => 'Por favor ingresa un correo electrónico válido.',
            'email.unique' => 'Este correo ya se encuentra registrado en nuestro sistema de voluntarios.',
            'desafio_respuesta.required' => 'Debes responder el desafío de seguridad.',
        ];
    }
}
