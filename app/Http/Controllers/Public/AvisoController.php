<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Aviso;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AvisoController extends Controller
{
    public function index(Request $request): Response
    {
        $query = Aviso::vigentes();

        if ($buscar = $request->input('buscar')) {
            $query->where(function ($q) use ($buscar) {
                $q->where('titulo', 'like', "%{$buscar}%")
                  ->orWhere('contenido', 'like', "%{$buscar}%");
            });
        }

        $avisos = $query->orderBy('es_destacado', 'desc')
                        ->latest('fecha_publicacion')
                        ->paginate(10)
                        ->withQueryString();

        return Inertia::render('Avisos/Index', [
            'avisos' => $avisos,
            'filtros' => [
                'buscar' => $buscar ?? '',
            ],
        ]);
    }
}
