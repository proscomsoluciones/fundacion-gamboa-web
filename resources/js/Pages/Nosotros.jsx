import React, { useMemo, useState } from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import ColaboradorCard from '@/Components/ColaboradorCard';
import { Head, Link } from '@inertiajs/react';

export default function Nosotros({ historia, mision, vision, directivos = [], colaboradores = [] }) {
    const [sectorActivo, setSectorActivo] = useState('Todos');

    const sectores = useMemo(
        () => ['Todos', ...new Set(colaboradores.map((c) => c.sector))],
        [colaboradores]
    );

    const scrollContainerRef = React.useRef(null);

    const scrollSectores = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -240 : 240;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const colaboradoresFiltrados = useMemo(
        () => (sectorActivo === 'Todos'
            ? colaboradores
            : colaboradores.filter((c) => c.sector === sectorActivo)),
        [colaboradores, sectorActivo]
    );

    // Función auxiliar para obtener iniciales del nombre
    const getIniciales = (nombre) => {
        if (!nombre) return 'FG';
        const partes = nombre.trim().split(' ');
        if (partes.length >= 2) {
            return `${partes[0][0]}${partes[1][0]}`.toUpperCase();
        }
        return partes[0].substring(0, 2).toUpperCase();
    };

    return (
        <PublicLayout>
            <Head title="Nosotros — Fundación Miguel Ángel Gamboa">
                <meta name="description" content="Conoce la historia, misión, visión y equipo directivo de la Fundación del Cáncer Miguel Ángel Gamboa en Catemu. Proyecto adjudicado por el Servicio de Salud Aconcagua junto al CESFAM Eduardo Raggio." />
            </Head>

            {/* Header Banner */}
            <div className="bg-gradient-to-r from-rose-50 via-white to-slate-50 text-slate-900 py-14 sm:py-18 border-b border-rose-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
                    <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block mb-2">Conócenos</span>
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950">Sobre Nuestra Fundación</h1>
                    <p className="text-slate-700 text-base sm:text-lg max-w-3xl mt-3 font-semibold">
                        Fundación del Cáncer Miguel Ángel Gamboa — Trabajando junto a la comunidad de Catemu y el Servicio de Salud Aconcagua por el bienestar de nuestros pacientes postrados y sus familias.
                    </p>
                </div>
            </div>

            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                    
                    {/* SECTION 1: STORY CONTENT */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-extrabold rounded-lg">
                                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                                <span>Fondo Concursable Servicio de Salud Aconcagua</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 leading-tight">
                                {historia?.titulo || 'Nuestra Historia y Trayectoria'}
                            </h2>

                            <div 
                                className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base space-y-4 font-medium"
                                dangerouslySetInnerHTML={{ __html: historia?.contenido || '' }}
                            />

                            <div className="pt-4 flex flex-wrap gap-4 items-center">
                                <Link
                                    href="/voluntarios"
                                    className="px-6 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow-md transition-all text-sm"
                                >
                                    Súmate como Voluntario
                                </Link>
                                <a
                                    href="mailto:F.MiguelAngelGamboa@gmail.com"
                                    className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl border border-slate-300 transition-all text-sm"
                                >
                                    Contactar a la Fundación
                                </a>
                            </div>
                        </div>

                        {/* Visual Card / Operational Highlights */}
                        <div className="lg:col-span-5">
                            <div className="bg-slate-50 rounded-3xl p-8 shadow-lg border border-slate-200 space-y-6">
                                <h3 className="font-extrabold text-xl text-slate-950 border-b border-slate-200 pb-4 flex items-center justify-between">
                                    <span>Pilares de Nuestro Proyecto</span>
                                    <span className="text-xs bg-rose-100 text-rose-700 px-2.5 py-1 rounded-full font-bold">Catemu 2026</span>
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 font-bold">
                                            1
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-950 text-base">Alianza CESFAM Catemu</h4>
                                            <p className="text-slate-600 text-xs font-medium">Postulación conjunta junto al CESFAM Eduardo Raggio, monitoras y municipio.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center shrink-0 font-bold">
                                            2
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-950 text-base">Capacitación a Cuidadores</h4>
                                            <p className="text-slate-600 text-xs font-medium">Acompañamiento profesional a familias de pacientes postrados con cáncer.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center shrink-0 font-bold">
                                            3
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-950 text-base">Ayudas Técnicas e Insumos</h4>
                                            <p className="text-slate-600 text-xs font-medium">Entrega de pañales, cremas antiescaras, nutrición y equipamiento clínico.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* NUEVA SECCIÓN: EQUIPO DIRECTIVO */}
                    <div id="equipo-directivo" className="pt-12 border-t border-slate-200 space-y-12 scroll-mt-24">
                        <div className="text-center max-w-3xl mx-auto space-y-3">
                            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block">Liderazgo y Gobernanza</span>
                            <h2 className="text-3xl sm:text-4xl font-black text-slate-950">
                                Equipo Directivo de la Fundación
                            </h2>
                            <p className="text-slate-600 text-sm sm:text-base font-medium">
                                Directiva responsable del liderazgo estratégico, la transparencia financiera y la coordinación institutos-comunidad.
                            </p>
                        </div>

                        {directivos.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {directivos.map((directivo) => (
                                    <div 
                                        key={directivo.id}
                                        className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl hover:border-rose-300 transition-all duration-300 flex flex-col items-center text-center group"
                                    >
                                        {/* Photo Frame Container */}
                                        <div className="w-full aspect-[4/3] bg-slate-100 relative overflow-hidden flex items-center justify-center border-b border-slate-100">
                                            {directivo.foto ? (
                                                <img 
                                                    src={`/storage/${directivo.foto}`} 
                                                    alt={directivo.nombre} 
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-slate-100 via-rose-50 to-slate-100 flex items-center justify-center text-slate-400">
                                                    <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">Fotografía Oficial</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Info Box */}
                                        <div className="p-6 w-full flex flex-col items-center space-y-2">
                                            <h3 className="font-extrabold text-slate-950 text-xl group-hover:text-rose-600 transition-colors">
                                                {directivo.nombre}
                                            </h3>

                                            <span className="inline-block px-3 py-1 bg-rose-50 border border-rose-100 text-rose-700 text-xs font-extrabold rounded-full">
                                                {directivo.cargo}
                                            </span>

                                            {directivo.profesion && (
                                                <p className="text-xs text-slate-500 font-semibold pt-0.5">
                                                    {directivo.profesion}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-200 text-slate-500 font-medium">
                                El equipo directivo se está actualizando. Puedes gestionar los miembros desde el panel de administración (`/admin`).
                            </div>
                        )}
                    </div>

                    {/* SECTION 3: MISIÓN Y VISIÓN */}
                    <div className="pt-12 border-t border-slate-200 space-y-12">
                        
                        <div className="text-center max-w-2xl mx-auto space-y-3">
                            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block">Propósito e Inspiración</span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
                                Misión y Visión Institucional
                            </h2>
                            <p className="text-slate-600 text-sm font-medium">
                                Los compromisos éticos que orientan cada entrega de ayuda técnica a nuestra comunidad.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            
                            {/* MISIÓN CARD */}
                            <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 shadow-lg border border-rose-100 space-y-6 relative overflow-hidden group hover:border-rose-400 transition-all duration-300">
                                <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>

                                <div>
                                    <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">Propósito Fundamental</span>
                                    <h3 className="text-2xl font-black text-slate-950 mt-1">
                                        {mision?.titulo || 'Misión Institucional'}
                                    </h3>
                                </div>

                                <div 
                                    className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base font-medium"
                                    dangerouslySetInnerHTML={{ __html: mision?.contenido || '' }}
                                />
                            </div>

                            {/* VISIÓN CARD */}
                            <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 shadow-lg border border-pink-100 space-y-6 relative overflow-hidden group hover:border-pink-400 transition-all duration-300">
                                <div className="w-14 h-14 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center font-bold">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>

                                <div>
                                    <span className="text-xs font-bold text-pink-600 uppercase tracking-wider block">Hacia el Futuro</span>
                                    <h3 className="text-2xl font-black text-slate-950 mt-1">
                                        {vision?.titulo || 'Visión Institucional'}
                                    </h3>
                                </div>

                                <div 
                                    className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base font-medium"
                                    dangerouslySetInnerHTML={{ __html: vision?.contenido || '' }}
                                />
                            </div>

                        </div>

                        {/* VALORES CARD */}
                        <div className="bg-gradient-to-r from-rose-50 via-pink-50 to-rose-50 rounded-3xl p-8 sm:p-12 text-slate-900 shadow-xl space-y-8 border border-rose-200">
                            <div className="text-center max-w-2xl mx-auto space-y-2">
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">Nuestros Valores Fundamentales</h3>
                                <p className="text-slate-600 text-sm font-medium">Principios inquebrantables de la Fundación Miguel Ángel Gamboa.</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm space-y-2">
                                    <h4 className="font-bold text-lg text-rose-700">Dignidad y Respeto</h4>
                                    <p className="text-xs text-slate-600 font-medium leading-relaxed">Tratamos a cada beneficiario y cuidador con la máxima consideración y empatía.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm space-y-2">
                                    <h4 className="font-bold text-lg text-rose-700">Transparencia</h4>
                                    <p className="text-xs text-slate-600 font-medium leading-relaxed">Gestión rigurosa y clara de cada recurso y equipamiento médico entregado.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm space-y-2">
                                    <h4 className="font-bold text-lg text-rose-700">Solidaridad</h4>
                                    <p className="text-xs text-slate-600 font-medium leading-relaxed">Fomentamos la unión comunitaria bajo el lema "Juntos contra el cáncer".</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* BANNER DIRECCIÓN A PÁGINA DE VOLUNTARIOS Y RED COMUNITARIA */}
                    <div className="pt-8 border-t border-slate-200">
                        <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="space-y-2 text-center sm:text-left max-w-xl">
                                <span className="px-3 py-1 bg-white/20 text-white text-xs font-black rounded-full uppercase tracking-wider">
                                    Red Comunitaria y Referentes
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-black">Conoce a Nuestros Voluntarios por Sector</h3>
                                <p className="text-rose-100 text-sm font-medium">
                                    Encuentra a los referentes territoriales de cada villa y población o súmate como voluntario a nuestra fundación.
                                </p>
                            </div>
                            <Link
                                href="/voluntarios"
                                className="px-8 py-4 bg-white text-rose-700 hover:bg-rose-50 font-black rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all shrink-0 text-sm whitespace-nowrap"
                            >
                                Ver Red de Voluntarios
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </PublicLayout>
    );
}
