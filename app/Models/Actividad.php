<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actividad extends Model
{
    use HasFactory;

    protected $table = 'actividades';

    protected $fillable = [
        'titulo',
        'descripcion',
        'lugar',
        'fecha_inicio',
        'fecha_fin',
        'imagen',
    ];

    protected $casts = [
        'fecha_inicio' => 'datetime',
        'fecha_fin' => 'datetime',
    ];

    public function scopeProximas($query)
    {
        return $query->where('fecha_inicio', '>=', now()->startOfDay())
                     ->orderBy('fecha_inicio', 'asc');
    }
}
