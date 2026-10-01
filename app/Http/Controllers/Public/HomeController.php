<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Noticia;
use App\Models\Aviso;
use App\Models\Actividad;
use App\Models\ContenidoInstitucional;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $avisosDestacados = Aviso::destacados()->latest('fecha_publicacion')->take(3)->get();
        $noticiasRecientes = Noticia::publicadas()->latest('fecha_publicacion')->take(3)->get();
        $proximasActividades = Actividad::proximas()->take(4)->get();

        $nosotros = ContenidoInstitucional::obtener(
            'nosotros_historia',
            'Nuestra Historia',
            'Facilitamos acceso digno a ayudas técnicas de salud (camas clínicas, sillas de ruedas, catres) a quienes más lo necesitan.'
        );

        return Inertia::render('Inicio', [
            'avisosDestacados' => $avisosDestacados,
            'noticiasRecientes' => $noticiasRecientes,
            'proximasActividades' => $proximasActividades,
            'nosotros' => $nosotros,
        ]);
    }
}
