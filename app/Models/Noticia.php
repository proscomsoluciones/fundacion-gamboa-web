<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Noticia extends Model
{
    use HasFactory;

    protected $table = 'noticias';

    protected $fillable = [
        'titulo',
        'slug',
        'resumen',
        'contenido',
        'imagen',
        'fecha_publicacion',
        'esta_publicado',
    ];

    protected $casts = [
        'fecha_publicacion' => 'datetime',
        'esta_publicado' => 'boolean',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->slug)) {
                $model->slug = Str::slug($model->titulo) . '-' . Str::random(5);
            }
        });
    }

    public function scopePublicadas($query)
    {
        return $query->where('esta_publicado', true)
                     ->where(function ($q) {
                         $q->whereNull('fecha_publicacion')
                           ->orWhere('fecha_publicacion', '<=', now());
                     });
    }
}
