<?php

namespace Database\Seeders;

use App\Models\Noticia;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class NoticiaSeeder extends Seeder
{
    public function run(): void
    {
        $noticias = [
            [
                'titulo' => 'Inauguración de la nueva Bodega Institucional de Despacho Rápido',
                'slug' => 'inauguracion-nueva-bodega-institucional-despacho-rapido',
                'resumen' => 'Contamos con un nuevo espacio optimizado de almacenamiento para responder con mayor celeridad a las emergencias de la comunidad.',
                'contenido' => '<p>Con gran orgullo presentamos nuestra nueva instalación de acopio y logística. Este espacio nos permite clasificar, sanitizar y armar los catres clínicos con mayor eficiencia.</p><p>Seguimos firmes en nuestro compromiso: <strong>Juntos contra el cáncer y al servicio de nuestra gente</strong>.</p>',
                'imagen' => 'noticias/noticia-camas.jpg',
                'fecha_publicacion' => Carbon::now()->subDays(1),
                'esta_publicado' => true,
            ],
            [
                'titulo' => 'Recepción de donación de andadores de aluminio y bastones de apoyo kinésico',
                'slug' => 'recepcion-donacion-andadores-aluminio-bastones',
                'resumen' => 'Incorporamos 30 burritos de marcha y bastones canadienses a nuestro catálogo de préstamo gratuito.',
                'contenido' => '<p>La rehabilitación activa y el retorno paulatino a la movilidad requieren de herramientas adecuadas. Recibimos un lote de <strong>andadores plegables ultraligeros y bastones de apoyo</strong>.</p><p>Están disponibles para ser solicitados por beneficiarios en etapa de recuperación o terapia física.</p>',
                'imagen' => 'noticias/noticia-sillas.jpg',
                'fecha_publicacion' => Carbon::now()->subDays(4),
                'esta_publicado' => true,
            ],
            [
                'titulo' => 'Entrega de 20 catres clínicos eléctricos equipados a familias de la comuna',
                'slug' => 'entrega-20-catres-clinicos-electricos-equipados',
                'resumen' => 'Completamos una nueva meta institucional llevando confort y facilidades de asistencia a 20 hogares golpeados por enfermedades crónicas.',
                'contenido' => '<p>Una jornada llena de emoción y gratitud se vivió durante la distribución domiciliaria de <strong>20 camas clínicas de 3 posiciones</strong>.</p><p>Los beneficiarios recibieron su equipamiento armado y listo para usar en sus dormitorios, mejorando sustancialmente su calidad de vida.</p>',
                'imagen' => 'noticias/noticia-camas.jpg',
                'fecha_publicacion' => Carbon::now()->subDays(8),
                'esta_publicado' => true,
            ],
            [
                'titulo' => 'Campaña "Juntos contra el Cáncer": Éxito total en recolección comunitaria de ayudas',
                'slug' => 'campana-juntos-contra-el-cancer-recoleccion',
                'resumen' => 'La comunidad se unió masivamente aportando andadores, bastones y recursos para la adquisición de nuevos insumos de salud.',
                'contenido' => '<p>Queremos expresar nuestro profundo agradecimiento a todos los vecinos y empresas locales que colaboraron en la campaña solidaria.</p><p>Gracias a sus aportes pudimos adquirir nuevos motores de reposición y barras de seguridad para nuestro banco de ayudas técnicas.</p>',
                'imagen' => 'noticias/noticia-sillas.jpg',
                'fecha_publicacion' => Carbon::now()->subDays(15),
                'esta_publicado' => true,
            ],
            [
                'titulo' => 'Capacitación práctica a 40 cuidadores familiares sobre ergonomía y movilización',
                'slug' => 'capacitacion-cuidadores-familiares-ergonomia',
                'resumen' => 'Kinesiólogos y enfermeras voluntarias brindaron un taller interactivo para evitar lesiones en el cuidado diario de pacientes dependientes.',
                'contenido' => '<p>El cuidado de un ser querido requiere conocimientos para proteger tanto la salud del paciente como la espalda del cuidador.</p><p>En este taller se enseñaron posturas adecuadas, uso de las posiciones articuladas del catre clínico y técnicas de transferencia segura.</p>',
                'imagen' => 'noticias/noticia-camas.jpg',
                'fecha_publicacion' => Carbon::now()->subDays(22),
                'esta_publicado' => true,
            ],
            [
                'titulo' => 'Donación de 40 colchones antiescaras para prevención de úlceras por presión',
                'slug' => 'donacion-colchones-antiescaras-prevencion',
                'resumen' => 'Recibimos una importante donación de colchones de aire con compresores de ciclo alternante para beneficiarios con reposo prolongado.',
                'contenido' => '<p>La salud cutánea y la comodidad de nuestros beneficiarios postrados es una prioridad. Recibimos un cargamento de <strong>40 sistemas antiescaras de tecnología alternante</strong>.</p><p>Estos equipos serán asignados inmediatamente a pacientes con indicación médica específica.</p>',
                'imagen' => null,
                'fecha_publicacion' => Carbon::now()->subDays(30),
                'esta_publicado' => true,
            ],
            [
                'titulo' => 'Apertura del Taller Técnico de Mantención Preventiva y Reparación de Equipamiento',
                'slug' => 'apertura-taller-tecnico-mantencion-reparacion',
                'resumen' => 'Inauguramos un espacio dedicado a la revisión técnica, sanitización y reparación de catres clínicos y sillas donadas.',
                'contenido' => '<p>Gracias al apoyo de profesionales técnicos voluntarios, ponemos en marcha nuestro taller de reacondicionamiento institucional.</p><p>En este espacio se realiza la mantención preventiva de motores de catres eléctricos, cambio de ruedas, tapicería y desinfección grado clínico de cada insumo.</p>',
                'imagen' => null,
                'fecha_publicacion' => Carbon::now()->subDays(38),
                'esta_publicado' => true,
            ],
            [
                'titulo' => 'Jornada de terreno: Entrega de 15 sillas de ruedas en sectores rurales',
                'slug' => 'jornada-terreno-entrega-sillas-ruedas-rurales',
                'resumen' => 'Nuestra cuadrilla de voluntarios se desplegó en localidades apartadas para llevar soluciones de movilidad directa a los hogares.',
                'contenido' => '<p>Durante este fin de semana, el equipo voluntario recorrió diversos sectores rurales de la comuna para entregar <strong>15 sillas de ruedas ergonómicas y plegables</strong>.</p><p>Cada entrega incluyó la inducción técnica correspondiente a los familiares para el uso seguro de frenos y reposapiés.</p>',
                'imagen' => 'noticias/noticia-sillas.jpg',
                'fecha_publicacion' => Carbon::now()->subDays(45),
                'esta_publicado' => true,
            ],
            [
                'titulo' => 'Alianza estratégica con centros de salud comunales para agilizar entregas',
                'slug' => 'alianza-centros-de-salud-comunales',
                'resumen' => 'Establecemos coordinaciones con CESFAM y hospitales para canalizar de forma prioritaria las solicitudes de catres clínicos.',
                'contenido' => '<p>Firmamos un valioso acuerdo de trabajo conjunto con los equipos de atención primaria de salud de la comuna.</p><p>Esta alianza permitirá identificar tempranamente a pacientes que requieren derivación urgente de <strong>catres clínicos eléctricos y sillas de ruedas</strong>, reduciendo los tiempos de espera a menos de 48 horas.</p>',
                'imagen' => null,
                'fecha_publicacion' => Carbon::now()->subDays(52),
                'esta_publicado' => true,
            ],
            [
                'titulo' => 'Constitución de la Fundación Miguel Ángel Gamboa y lanzamiento del Banco de Ayudas Técnicas',
                'slug' => 'constitucion-fundacion-lanzamiento-banco-ayudas',
                'resumen' => 'Con gran alegría oficializamos nuestra organización dedicada al préstamo gratuito de equipamiento de salud para pacientes oncológicos y personas dependientes.',
                'contenido' => '<p>Con la presencia de líderes comunitarios, familias beneficiarias y voluntarios, se realizó el lanzamiento oficial de la <strong>Fundación Miguel Ángel Gamboa</strong>.</p><p>Nuestro principal propósito es garantizar que ninguna persona con cáncer o movilidad reducida carezca de las ayudas técnicas necesarias para llevar un proceso digno y cómodo en su hogar.</p>',
                'imagen' => 'noticias/noticia-camas.jpg',
                'fecha_publicacion' => Carbon::now()->subDays(60),
                'esta_publicado' => true,
            ],
        ];

        foreach ($noticias as $noticiaData) {
            Noticia::updateOrCreate(
                ['slug' => $noticiaData['slug']],
                $noticiaData
            );
        }
    }
}
