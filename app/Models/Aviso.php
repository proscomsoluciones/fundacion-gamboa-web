<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aviso extends Model
{
    use HasFactory;

    protected $table = 'avisos';

    protected $fillable = [
        'titulo',
        'contenido',
        'es_destacado',
        'es_activo',
        'fecha_publicacion',
        'fecha_expiracion',
    ];

    protected $casts = [
        'es_destacado' => 'boolean',
        'es_activo' => 'boolean',
        'fecha_publicacion' => 'datetime',
        'fecha_expiracion' => 'datetime',
    ];

    public function scopeVigentes($query)
    {
        return $query->where('es_activo', true)
                     ->where(function ($q) {
                         $q->whereNull('fecha_publicacion')
                           ->orWhere('fecha_publicacion', '<=', now());
                     })
                     ->where(function ($q) {
                         $q->whereNull('fecha_expiracion')
                           ->orWhere('fecha_expiracion', '>=', now());
                     });
    }

    public function scopeDestacados($query)
    {
        return $query->vigentes()->where('es_destacado', true);
    }
}
