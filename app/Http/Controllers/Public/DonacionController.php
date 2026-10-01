<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Colaborador;
use App\Models\ContenidoInstitucional;
use App\Models\CuentaBancaria;
use App\Models\InsumoNecesario;
use Inertia\Inertia;
use Inertia\Response;

class DonacionController extends Controller
{
    public function index(): Response
    {
        $intro = ContenidoInstitucional::obtener(
            'donaciones_intro',
            'Ayúdanos a Seguir Ayudando',
            'Tu aporte, ya sea en dinero o en insumos, nos permite seguir entregando ayudas técnicas de salud gratuitas y dignas a quienes más lo necesitan.'
        );

        $cuentasBancarias = CuentaBancaria::activas()->orderBy('orden')->get();

        $insumosNecesarios = InsumoNecesario::activos()
            ->orderByDesc('urgente')
            ->orderBy('orden')
            ->get();

        $contactoCoordinacion = Colaborador::activos()
            ->where('sector', 'Coordinación General')
            ->whereNotNull('telefono_whatsapp')
            ->orderBy('orden')
            ->first(['id', 'nombre', 'cargo', 'telefono_whatsapp']);

        return Inertia::render('Donaciones/Index', [
            'intro' => $intro,
            'cuentasBancarias' => $cuentasBancarias,
            'insumosNecesarios' => $insumosNecesarios,
            'contactoCoordinacion' => $contactoCoordinacion,
        ]);
    }
}
