<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Directivo extends Model
{
    use HasFactory;

    protected $table = 'directivos';

    protected $fillable = [
        'nombre',
        'cargo',
        'profesion',
        'foto',
        'descripcion',
        'telefono_whatsapp',
        'email',
        'orden',
        'activo',
    ];

    protected $casts = [
        'activo' => 'boolean',
        'orden' => 'integer',
    ];

    protected $appends = [
        'whatsapp_link',
    ];

    public function scopeActivos($query)
    {
        return $query->where('activo', true);
    }

    public function getWhatsappLinkAttribute(): ?string
    {
        if (empty($this->telefono_whatsapp)) {
            return null;
        }

        $numero = preg_replace('/\D+/', '', $this->telefono_whatsapp);
        $mensaje = "Hola {$this->nombre}, te escribo desde el sitio web de la Fundación Miguel Ángel Gamboa.";

        return 'https://wa.me/'.$numero.'?text='.rawurlencode($mensaje);
    }
}
