<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Colaborador;
use App\Models\ContenidoInstitucional;
use App\Models\Directivo;
use Inertia\Inertia;
use Inertia\Response;

class PaginaController extends Controller
{
    public function nosotros(): Response
    {
        $historia = ContenidoInstitucional::obtener(
            'nosotros_historia',
            'Nuestra Historia y Trayectoria',
            'La Fundación del Cáncer Miguel Ángel Gamboa postulo y adjudicó un importante fondo concursable por parte del Servicio de Salud Aconcagua, iniciativa realizada junto al CESFAM Eduardo Raggio de la comuna de Catemu, apoyados por juntas de vecinos, organizaciones comunitarias, monitoras del CESFAM y el Municipio de Catemu.<br><br>Este proyecto está enfocado en los pacientes postrados de la comuna con cáncer y otras patologías, capacitando a sus cuidadores y familias en distintas necesidades acompañados por profesionales de la salud. Además, contempla la entrega de ayudas técnicas, suplementos de nutrición e insumos críticos como pañales y cremas antiescaras.<br><br>Agradecemos a todos los involucrados en este proyecto y a quienes nos apoyan permanentemente desde sus hogares.'
        );

        $mision = ContenidoInstitucional::obtener(
            'mision_texto',
            'Misión Institucional',
            'Proveer ayudas técnicas de salud integrales, oportunas y gratuitas a personas con movilidad reducida y pacientes oncológicos, capacitándolos junto a sus cuidadores para una atención digna y humanizada.'
        );

        $vision = ContenidoInstitucional::obtener(
            'vision_texto',
            'Visión Institucional',
            'Ser un referente comunal y regional en el acompañamiento de pacientes con cáncer y patologías complejas, articulando redes comunitarias, centros de salud y municipios para mejorar la calidad de vida de cada familia.'
        );

        $directivos = Directivo::activos()
            ->orderBy('orden')
            ->get(['id', 'nombre', 'cargo', 'profesion', 'foto', 'descripcion', 'telefono_whatsapp', 'email']);

        $colaboradores = Colaborador::activos()
            ->orderBy('sector')
            ->orderBy('orden')
            ->get(['id', 'nombre', 'cargo', 'sector', 'foto', 'descripcion', 'telefono_whatsapp']);

        return Inertia::render('Nosotros', [
            'historia' => $historia,
            'mision' => $mision,
            'vision' => $vision,
            'directivos' => $directivos,
            'colaboradores' => $colaboradores,
        ]);
    }

    public function misionVision()
    {
        return redirect()->route('nosotros');
    }

    public function contacto(): Response
    {
        return Inertia::render('Contacto', [
            'telefonos' => [
                ['numero' => '+56952156652', 'formateado' => '952156652', 'label' => 'Atención Directa y Consultas'],
                ['numero' => '+56966379509', 'formateado' => '966379509', 'label' => 'Coordinación General y Voluntariado'],
                ['numero' => '+5694164736', 'formateado' => '94164736', 'label' => 'Entrega de Ayudas Técnicas e Insumos'],
            ],
            'email' => 'F.MiguelAngelGamboa@gmail.com',
            'horario' => 'Lunes a Viernes de 09:00 a 18:00 hrs',
            'facebook' => 'Fundación Miguel Ángel Gamboa',
        ]);
    }
}
