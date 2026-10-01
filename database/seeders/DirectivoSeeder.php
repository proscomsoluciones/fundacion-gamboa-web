<?php

namespace Database\Seeders;

use App\Models\Directivo;
use Illuminate\Database\Seeder;

class DirectivoSeeder extends Seeder
{
    public function run(): void
    {
        $directivos = [
            [
                'nombre' => 'Nombre del Presidente/a',
                'cargo' => 'Presidente / Presidencia',
                'profesion' => 'Dirección General',
                'telefono_whatsapp' => '+56966379509',
                'email' => 'F.MiguelAngelGamboa@gmail.com',
                'descripcion' => 'Liderazgo de la Fundación del Cáncer Miguel Ángel Gamboa.',
                'orden' => 1,
                'activo' => true,
            ],
            [
                'nombre' => 'Nombre del Vicepresidente/a',
                'cargo' => 'Vicepresidente / Vicepresidencia',
                'profesion' => 'Gestión Institucional',
                'telefono_whatsapp' => '+56952156652',
                'email' => 'F.MiguelAngelGamboa@gmail.com',
                'descripcion' => 'Coordinación con el Municipio de Catemu.',
                'orden' => 2,
                'activo' => true,
            ],
            [
                'nombre' => 'Nombre del Secretario/a',
                'cargo' => 'Secretaría General',
                'profesion' => 'Administración Institucional',
                'telefono_whatsapp' => '+5694164736',
                'email' => 'F.MiguelAngelGamboa@gmail.com',
                'descripcion' => 'Gestión documental y actas de directiva.',
                'orden' => 3,
                'activo' => true,
            ],
            [
                'nombre' => 'Nombre del Tesorero/a',
                'cargo' => 'Tesorería y Finanzas',
                'profesion' => 'Gestión Financiera',
                'telefono_whatsapp' => '+56966379509',
                'email' => 'F.MiguelAngelGamboa@gmail.com',
                'descripcion' => 'Administración transparente de recursos.',
                'orden' => 4,
                'activo' => true,
            ],
            [
                'nombre' => 'Nombre del Director/a de Salud',
                'cargo' => 'Dirección de Salud y Enlace CESFAM',
                'profesion' => 'Coordinación de Salud',
                'telefono_whatsapp' => '+56952156652',
                'email' => 'F.MiguelAngelGamboa@gmail.com',
                'descripcion' => 'Coordinación con el CESFAM Eduardo Raggio de Catemu.',
                'orden' => 5,
                'activo' => true,
            ],
        ];

        foreach ($directivos as $item) {
            Directivo::updateOrCreate(
                ['cargo' => $item['cargo']],
                $item
            );
        }
    }
}
