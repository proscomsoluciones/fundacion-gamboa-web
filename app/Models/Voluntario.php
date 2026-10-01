<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voluntario extends Model
{
    use HasFactory;

    protected $table = 'voluntarios';

    protected $fillable = [
        'nombres',
        'apellidos',
        'rut',
        'email',
        'telefono',
        'direccion',
        'interes_actividad',
        'motivacion',
        'estado',
    ];

    public function getNombreCompletoAttribute()
    {
        return "{$this->nombres} {$this->apellidos}";
    }
}
