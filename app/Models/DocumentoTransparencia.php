<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class DocumentoTransparencia extends Model
{
    use HasFactory;

    protected $table = 'documentos_transparencia';

    protected $fillable = [
        'titulo',
        'descripcion',
        'categoria',
        'archivo',
        'anio',
        'orden',
        'activo',
    ];

    protected $casts = [
        'activo' => 'boolean',
        'orden' => 'integer',
        'anio' => 'integer',
    ];

    protected $appends = [
        'extension',
        'tamano_legible',
    ];

    public const CATEGORIAS = [
        'Estatutos y Personalidad Jurídica',
        'Memoria Anual',
        'Estados Financieros y Balances',
        'Actas y Resoluciones',
        'Otros Documentos Públicos',
    ];

    public function scopeActivos($query)
    {
        return $query->where('activo', true);
    }

    public function getExtensionAttribute(): string
    {
        return strtoupper(pathinfo($this->archivo ?? '', PATHINFO_EXTENSION));
    }

    public function getTamanoLegibleAttribute(): ?string
    {
        if (empty($this->archivo) || ! Storage::disk('public')->exists($this->archivo)) {
            return null;
        }

        $bytes = Storage::disk('public')->size($this->archivo);

        if ($bytes >= 1048576) {
            return round($bytes / 1048576, 1).' MB';
        }

        return round($bytes / 1024).' KB';
    }
}
