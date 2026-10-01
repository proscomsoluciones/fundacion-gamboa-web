<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\ContenidoInstitucional;
use App\Models\DocumentoTransparencia;
use Inertia\Inertia;
use Inertia\Response;

class TransparenciaController extends Controller
{
    public function index(): Response
    {
        $intro = ContenidoInstitucional::obtener(
            'transparencia_intro',
            'Transparencia y Rendición de Cuentas',
            'Ponemos a disposición de la comunidad, donantes y organismos fiscalizadores nuestros documentos institucionales, estados financieros y memorias anuales.'
        );

        $documentos = DocumentoTransparencia::activos()
            ->orderBy('categoria')
            ->orderByDesc('anio')
            ->orderBy('orden')
            ->get([
                'id', 'titulo', 'descripcion', 'categoria', 'archivo', 'anio', 'orden', 'created_at',
            ]);

        $documentosPorCategoria = $documentos
            ->groupBy('categoria')
            ->map->values();

        return Inertia::render('Transparencia/Index', [
            'intro' => $intro,
            'documentosPorCategoria' => $documentosPorCategoria,
        ]);
    }
}
