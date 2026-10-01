<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContenidoInstitucional extends Model
{
    use HasFactory;

    protected $table = 'contenido_institucional';

    protected $fillable = [
        'clave',
        'titulo',
        'contenido',
        'imagen',
    ];

    public static function obtener($clave, $defectoTitulo = '', $defectoContenido = '')
    {
        $registro = static::where('clave', $clave)->first();
        if (!$registro) {
            return [
                'titulo' => $defectoTitulo,
                'contenido' => $defectoContenido,
                'imagen' => null,
            ];
        }
        return [
            'titulo' => $registro->titulo ?: $defectoTitulo,
            'contenido' => $registro->contenido ?: $defectoContenido,
            'imagen' => $registro->imagen,
        ];
    }
}
