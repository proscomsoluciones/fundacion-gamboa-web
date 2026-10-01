<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Noticia;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class NoticiaController extends Controller
{
    public function index(Request $request): Response
    {
        $query = Noticia::publicadas();

        if ($buscar = $request->input('buscar')) {
            $query->where(function ($q) use ($buscar) {
                $q->where('titulo', 'like', "%{$buscar}%")
                  ->orWhere('resumen', 'like', "%{$buscar}%")
                  ->orWhere('contenido', 'like', "%{$buscar}%");
            });
        }

        $noticias = $query->latest('fecha_publicacion')->paginate(12)->withQueryString();

        return Inertia::render('Noticias/Index', [
            'noticias' => $noticias,
            'filtros' => [
                'buscar' => $buscar ?? '',
            ],
        ]);
    }

    public function show(string $slug): Response
    {
        $noticia = Noticia::publicadas()->where('slug', $slug)->firstOrFail();

        $relacionadas = Noticia::publicadas()
            ->where('id', '!=', $noticia->id)
            ->latest('fecha_publicacion')
            ->take(3)
            ->get();

        return Inertia::render('Noticias/Show', [
            'noticia' => $noticia,
            'relacionadas' => $relacionadas,
        ]);
    }
}
