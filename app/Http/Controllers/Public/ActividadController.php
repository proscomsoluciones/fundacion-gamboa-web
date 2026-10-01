<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Actividad;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Carbon\Carbon;

class ActividadController extends Controller
{
    public function index(Request $request): Response
    {
        $mes = $request->input('mes', now()->format('Y-m'));
        $fechaBase = Carbon::parse($mes . '-01');

        $inicioMes = $fechaBase->copy()->startOfMonth();
        $finMes = $fechaBase->copy()->endOfMonth();

        $actividades = Actividad::whereBetween('fecha_inicio', [$inicioMes, $finMes])
            ->orderBy('fecha_inicio', 'asc')
            ->get();

        return Inertia::render('Calendario/Index', [
            'actividades' => $actividades,
            'mesActual' => $fechaBase->format('Y-m'),
            'nombreMes' => $fechaBase->translatedFormat('F Y'),
        ]);
    }
}
