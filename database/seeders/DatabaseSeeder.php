<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Aviso;
use App\Models\Actividad;
use App\Models\Voluntario;
use App\Models\Colaborador;
use App\Models\Directivo;
use App\Models\CuentaBancaria;
use App\Models\InsumoNecesario;
use App\Models\ContenidoInstitucional;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Admin User for Filament & Breeze
        $admin = User::firstOrCreate(
            ['email' => 'admin@fundacion.org'],
            [
                'name' => 'Administrador Fundación',
                'password' => bcrypt('password'),
            ]
        );
        // is_admin no es mass-assignable a propósito (evita escalar privilegios vía formularios); se fija aparte.
        $admin->forceFill(['is_admin' => true])->save();

        // Contenido Institucional
        ContenidoInstitucional::updateOrCreate(
            ['clave' => 'nosotros_historia'],
            [
                'titulo' => 'Nuestra Historia y Logros Destacados',
                'contenido' => 'La Fundación del Cáncer Miguel Ángel Gamboa adjudicó un importante fondo concursable por parte del Servicio de Salud Aconcagua.<br><br>Este proyecto fue impulsado conjuntamente con el CESFAM Eduardo Raggio de la comuna de Catemu, contando con el respaldo de juntas de vecinos, organizaciones territoriales, monitoras del CESFAM y el apoyo permanente de la Municipalidad de Catemu.<br><br>Esta iniciativa está enfocado en los pacientes postrados de la comuna con cáncer y otras patologías, capacitando a sus cuidadores y familias en diversas necesidades acompañados por los profesionales de salud del CESFAM. Asimismo, contempla la entrega de ayudas técnicas, apoyo nutricional e insumos clave como pañales de adulto y cremas antiescaras.<br><br>Agradecemos profundamente a todos los involucrados en este proyecto y a quienes nos apoyan desde sus hogares.',
            ]
        );

        ContenidoInstitucional::updateOrCreate(
            ['clave' => 'mision_texto'],
            [
                'titulo' => 'Misión Institucional',
                'contenido' => 'Proveer ayudas técnicas de salud integrales, oportunas y gratuitas a personas con movilidad reducida o enfermedades crónicas en la comunidad, promoviendo su autonomía, dignidad y bienestar familiar.',
            ]
        );

        ContenidoInstitucional::updateOrCreate(
            ['clave' => 'vision_texto'],
            [
                'titulo' => 'Visión Institucional',
                'contenido' => 'Ser una fundación referente a nivel regional y nacional en la gestión transparente y humanizada de insumos y equipos de salud, garantizando que ninguna persona se quede sin el equipamiento clínico esencial para su recuperación y cuidado.',
            ]
        );

        // Seeder de Noticias (10 noticias con distintas fechas)
        $this->call(NoticiaSeeder::class);

        // Seeder del Equipo Directivo
        $this->call(DirectivoSeeder::class);

        // Avisos comunitarios de ejemplo
        Aviso::firstOrCreate(
            ['titulo' => 'Apertura de postulaciones a Bancos de Ayudas Técnicas 2026'],
            [
                'contenido' => 'Recordamos a los vecinos que las solicitudes para préstamos de catres clínicos y sillas de ruedas se encuentran abiertas. Presenta el informe médico en la sede o a través de nuestros canales oficiales.',
                'es_destacado' => true,
                'es_activo' => true,
                'fecha_publicacion' => now()->subDays(1),
                'fecha_expiracion' => now()->addDays(30),
            ]
        );

        Aviso::firstOrCreate(
            ['titulo' => 'Horarios especiales de atención en Sede Central'],
            [
                'contenido' => 'Informamos a nuestros beneficiarios que la atención presencial para entrega de insumos se realiza de Lunes a Viernes de 09:00 a 14:00 hrs.',
                'es_destacado' => false,
                'es_activo' => true,
                'fecha_publicacion' => now()->subDays(3),
                'fecha_expiracion' => now()->addDays(60),
            ]
        );

        // Actividades del Calendario de ejemplo
        Actividad::firstOrCreate(
            ['titulo' => 'Jornada de Sanitización y Mantenimiento de Equipos'],
            [
                'descripcion' => 'Voluntarios técnicos realizarán mantención preventiva a sillas de ruedas y catres clínicos en bodega central.',
                'lugar' => 'Bodega Central Fundación, Av. Principal 1234',
                'fecha_inicio' => now()->addDays(3)->setHour(10)->setMinute(0),
                'fecha_fin' => now()->addDays(3)->setHour(14)->setMinute(0),
            ]
        );

        Actividad::firstOrCreate(
            ['titulo' => 'Operativo Terreno: Entrega de Ayudas Técnicas'],
            [
                'descripcion' => 'Ruta de entrega domiciliaria de catres clínicos a familias inscritas en el programa del mes.',
                'lugar' => 'Sector Comunal Poniente',
                'fecha_inicio' => now()->addDays(8)->setHour(9)->setMinute(30),
                'fecha_fin' => now()->addDays(8)->setHour(17)->setMinute(0),
            ]
        );

        Actividad::firstOrCreate(
            ['titulo' => 'Encuentro Anual de Voluntarios y Amigos de la Fundación'],
            [
                'descripcion' => 'Reunión de coordinación, balance de entregas comunitarias del semestre y bienvenida a nuevos colaboradores.',
                'lugar' => 'Auditorio Municipal',
                'fecha_inicio' => now()->addDays(15)->setHour(18)->setMinute(30),
                'fecha_fin' => now()->addDays(15)->setHour(21)->setMinute(0),
            ]
        );

        // Contenido introductorio de la página de Donaciones
        ContenidoInstitucional::updateOrCreate(
            ['clave' => 'donaciones_intro'],
            [
                'titulo' => 'Ayúdanos a Seguir Ayudando',
                'contenido' => 'Tu aporte, ya sea en dinero o en insumos, nos permite seguir entregando ayudas técnicas de salud gratuitas y dignas a quienes más lo necesitan.',
            ]
        );

        // Contenido introductorio de la página de Transparencia
        ContenidoInstitucional::updateOrCreate(
            ['clave' => 'transparencia_intro'],
            [
                'titulo' => 'Transparencia y Rendición de Cuentas',
                'contenido' => 'Ponemos a disposición de la comunidad, donantes y organismos fiscalizadores nuestros documentos institucionales, estados financieros y memorias anuales.',
            ]
        );

        // Cuenta bancaria de ejemplo (reemplazar por la cuenta real desde /admin)
        CuentaBancaria::firstOrCreate(
            ['numero_cuenta' => '00-000-00000-00'],
            [
                'banco' => 'Banco Estado',
                'tipo_cuenta' => 'Cuenta Corriente',
                'rut_titular' => '65.000.000-0',
                'nombre_titular' => 'Fundación Miguel Ángel Gamboa',
                'email_confirmacion' => 'donaciones@fundaciongamboa.org',
                'orden' => 1,
                'activo' => true,
            ]
        );

        // Insumos necesarios de ejemplo (reemplazar/actualizar según la necesidad real desde /admin)
        $insumos = [
            ['nombre' => 'Camas clínicas o catres eléctricos', 'urgente' => true, 'orden' => 1],
            ['nombre' => 'Colchones antiescaras', 'urgente' => true, 'orden' => 2],
            ['nombre' => 'Sillas de ruedas estándar o neurológicas', 'urgente' => false, 'orden' => 3],
            ['nombre' => 'Andadores y bastones', 'descripcion' => 'Nuevos o en buen estado', 'urgente' => false, 'orden' => 4],
            ['nombre' => 'Pañales de adulto', 'descripcion' => 'Todas las tallas', 'urgente' => true, 'orden' => 5],
            ['nombre' => 'Guantes de látex y artículos de aseo clínico', 'urgente' => false, 'orden' => 6],
        ];

        foreach ($insumos as $insumo) {
            InsumoNecesario::firstOrCreate(
                ['nombre' => $insumo['nombre']],
                [
                    'descripcion' => $insumo['descripcion'] ?? null,
                    'urgente' => $insumo['urgente'],
                    'orden' => $insumo['orden'],
                    'activo' => true,
                ]
            );
        }

        // Equipo Directivo de la Fundación (Administrable en /admin -> Equipo Directivo)
        Directivo::firstOrCreate(
            ['nombre' => 'Directiva Fundación Miguel Ángel Gamboa', 'cargo' => 'Presidencia y Liderazgo Institucional'],
            [
                'profesion' => 'Dirección General',
                'telefono_whatsapp' => '+56966379509',
                'email' => 'F.MiguelAngelGamboa@gmail.com',
                'descripcion' => 'Liderazgo institucional enfocado en la consecución de fondos concursables, gestión comunitaria y apoyo a pacientes con cáncer y postrados.',
                'orden' => 1,
                'activo' => true,
            ]
        );

        Directivo::firstOrCreate(
            ['nombre' => 'Equipo de Coordinación de Proyectos y Salud', 'cargo' => 'Dirección de Proyectos y Salud'],
            [
                'profesion' => 'Salud Comunitaria y Redes',
                'telefono_whatsapp' => '+56952156652',
                'email' => 'F.MiguelAngelGamboa@gmail.com',
                'descripcion' => 'Coordinación con el Servicio de Salud Aconcagua, CESFAM Eduardo Raggio de Catemu y juntas de vecinos de la comuna.',
                'orden' => 2,
                'activo' => true,
            ]
        );

        Directivo::firstOrCreate(
            ['nombre' => 'Coordinación de Logística e Insumos', 'cargo' => 'Dirección de Logística y Entrega de Ayudas Técnicas'],
            [
                'profesion' => 'Gestión Territorial',
                'telefono_whatsapp' => '+5694164736',
                'email' => 'F.MiguelAngelGamboa@gmail.com',
                'descripcion' => 'Supervisión de entregas de catres clínicos, sillas de ruedas, alimentos técnicos, pañales y cremas antiescaras.',
                'orden' => 3,
                'activo' => true,
            ]
        );

        // Equipo de Voluntarios por Sectores (Administrable en /admin)
        Colaborador::firstOrCreate(
            ['nombre' => 'Jocelyn', 'sector' => 'Villa Raúl Silva Henríquez'],
            [
                'cargo' => 'Referente de Sector',
                'telefono_whatsapp' => '+56966379509',
                'descripcion' => 'Referente comunitaria en Villa Raúl Silva Henríquez.',
                'orden' => 1,
                'activo' => true,
            ]
        );

        Colaborador::firstOrCreate(
            ['nombre' => 'María Fernanda Rojas', 'sector' => 'El Cobre'],
            [
                'cargo' => 'Referente de Sector',
                'telefono_whatsapp' => '+56900000001',
                'descripcion' => 'Coordinadora y referente en sector El Cobre.',
                'orden' => 1,
                'activo' => true,
            ]
        );

        Colaborador::firstOrCreate(
            ['nombre' => 'Pedro Antonio Silva', 'sector' => 'El Seco'],
            [
                'cargo' => 'Referente de Sector',
                'telefono_whatsapp' => '+56900000002',
                'descripcion' => 'Referente de entregas en sector El Seco.',
                'orden' => 1,
                'activo' => true,
            ]
        );

        Colaborador::firstOrCreate(
            ['nombre' => 'Camila Andrea Torres', 'sector' => 'Las Varillas'],
            [
                'cargo' => 'Referente de Sector',
                'telefono_whatsapp' => '+56900000003',
                'descripcion' => 'Referente voluntaria en sector Las Varillas.',
                'orden' => 1,
                'activo' => true,
            ]
        );

        Colaborador::firstOrCreate(
            ['nombre' => 'Javiera Ignacia Muñoz', 'sector' => 'La Colonia'],
            [
                'cargo' => 'Referente de Sector',
                'telefono_whatsapp' => '+56900000004',
                'descripcion' => 'Referente comunitaria en sector La Colonia.',
                'orden' => 1,
                'activo' => true,
            ]
        );

        // Voluntario de muestra
        Voluntario::firstOrCreate(
            ['email' => 'juan.perez@ejemplo.com'],
            [
                'nombres' => 'Juan Carlos',
                'apellidos' => 'Pérez Soto',
                'rut' => '12.345.678-9',
                'telefono' => '+56 9 8765 4321',
                'direccion' => 'Calle Los Olivos 432',
                'interes_actividad' => 'Apoyo en logística y despacho de catres clínicos',
                'motivacion' => 'Deseo contribuir con mi tiempo libre a apoyar a familias que necesitan insumos médicos para sus adultos mayores.',
                'estado' => 'pendiente',
            ]
        );
    }
}
