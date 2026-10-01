<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Colaborador extends Model
{
    use HasFactory;

    protected $table = 'colaboradores';

    protected $fillable = [
        'nombre',
        'cargo',
        'sector',
        'telefono_whatsapp',
        'foto',
        'descripcion',
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

    public const SECTORES = [
        'Villa Raúl Silva Henríquez',
        'El Cobre',
        'El Seco',
        'Las Varillas',
        'La Colonia',
        'Referente',
        'Coordinación General',
        'Logística y Entregas',
        'Mantención Técnica',
        'Salud y Cuidados',
        'Administración',
        'Difusión y Eventos',
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
