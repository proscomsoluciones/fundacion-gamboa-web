<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InsumoNecesario extends Model
{
    use HasFactory;

    protected $table = 'insumos_necesarios';

    protected $fillable = [
        'nombre',
        'descripcion',
        'urgente',
        'activo',
        'orden',
    ];

    protected $casts = [
        'urgente' => 'boolean',
        'activo' => 'boolean',
        'orden' => 'integer',
    ];

    public function scopeActivos($query)
    {
        return $query->where('activo', true);
    }
}
