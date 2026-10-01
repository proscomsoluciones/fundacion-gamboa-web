import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import NewsCard from '@/Components/NewsCard';
import NoticeCard from '@/Components/NoticeCard';
import { Head, Link } from '@inertiajs/react';

export default function Inicio({ avisosDestacados, noticiasRecientes, proximasActividades, nosotros }) {
    return (
        <PublicLayout>
            <Head title="Inicio — Fundación Miguel Ángel Gamboa">
                <meta name="description" content="Fundación del Cáncer Miguel Ángel Gamboa — Apoyo integral y gratuito a pacientes con cáncer y postrados en Catemu y Valle del Aconcagua. Préstamo de catres clínicos, sillas de ruedas e insumos de salud." />
            </Head>

            {/* HERO SECTION WITH BACKGROUND IMAGE & HIGH CONTRAST LUMINOUS OVERLAY */}
            <section className="relative overflow-hidden bg-[url('/img/hero-bg.jpg')] bg-cover bg-center py-16 lg:py-24 border-b border-rose-100">
                {/* Luminous Light Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-rose-50/70 backdrop-blur-xs"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Synchronized Height Grid Layout (items-stretch) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                        
                        {/* Left Hero Card - Equal Height Flex Container */}
                        <div className="lg:col-span-7 flex flex-col justify-between bg-white/90 backdrop-blur-md p-8 sm:p-10 lg:p-12 rounded-3xl border border-white/80 shadow-2xl space-y-8">
                            
                            <div className="space-y-6">
                                {/* Floating Micro-Badge */}
                                <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm font-extrabold shadow-2xs">
                                    <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping"></span>
                                    <span>FUNDACIÓN MIGUEL ÁNGEL GAMBOA — JUNTOS CONTRA EL CÁNCER</span>
                                </div>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight">
                                    Ayudas Técnicas de Salud <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700">Dignas y Gratuitas</span>
                                </h1>

                                <p className="text-lg sm:text-xl text-slate-800 font-semibold leading-relaxed">
                                    Facilitamos camas clínicas, catres eléctricos, sillas de ruedas e insumos esenciales a pacientes oncológicos y personas con movilidad reducida en la comunidad.
                                </p>
                            </div>

                            {/* Action Buttons Aligned at the Bottom */}
                            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                                <Link
                                    href="/voluntarios"
                                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-extrabold rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 active:scale-95 transition-all duration-300 text-base text-center flex items-center justify-center space-x-2 shrink-0"
                                >
                                    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    <span>Quiero Colaborar / Ser Voluntario</span>
                                </Link>

                                <Link
                                    href="/avisos"
                                    className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300 text-base text-center shrink-0"
                                >
                                    Ver Avisos Comunitarios
                                </Link>
                            </div>

                        </div>

                        {/* Right Hero Card - Equal Height Flex Container */}
                        <div className="lg:col-span-5 flex flex-col justify-between bg-white/90 backdrop-blur-md p-8 sm:p-10 lg:p-12 rounded-3xl border border-rose-100 shadow-2xl space-y-8">
                            
                            <div className="space-y-6">
                                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                    <div>
                                        <h3 className="font-extrabold text-xl lg:text-2xl text-slate-950">
                                            Banco de Ayudas Técnicas
                                        </h3>
                                        <p className="text-xs text-rose-600 font-bold">
                                            Préstamo comunitario sin costo
                                        </p>
                                    </div>
                                    <span className="px-3.5 py-1.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-black rounded-full">
                                        Catálogo Vital
                                    </span>
                                </div>

                                {/* 4 Static Categories Grid (Non-clickable) */}
                                <div className="grid grid-cols-2 gap-3 pointer-events-none select-none">
                                    <div className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-100 flex items-center space-x-2.5">
                                        <div className="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                        </div>
                                        <span className="text-xs font-bold text-slate-900">Camas Clínicas</span>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center space-x-2.5">
                                        <div className="w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
                                            </svg>
                                        </div>
                                        <span className="text-xs font-bold text-slate-900">Sillas de Ruedas</span>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center space-x-2.5">
                                        <div className="w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </div>
                                        <span className="text-xs font-bold text-slate-900">Colchones Antiescaras</span>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center space-x-2.5">
                                        <div className="w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <span className="text-xs font-bold text-slate-900">Andadores</span>
                                    </div>
                                </div>

                                {/* Features Info Box (Non-clickable) */}
                                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-2">
                                    <h4 className="font-bold text-slate-950 text-sm">
                                        Catres Clínicos Eléctricos & Equipamiento Especial
                                    </h4>
                                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                                        Entregamos equipamiento médico articulado de 3 posiciones, barandas de seguridad y colchones de prevención a domicilio sin costo económico.
                                    </p>
                                    <ul className="space-y-1 pt-1">
                                        <li className="flex items-center space-x-2 text-xs text-slate-800 font-semibold">
                                            <svg className="w-4 h-4 text-rose-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Inclinación de respaldo y elevación de piernas</span>
                                        </li>
                                        <li className="flex items-center space-x-2 text-xs text-slate-800 font-semibold">
                                            <svg className="w-4 h-4 text-rose-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Barandas laterales abatibles de seguridad</span>
                                        </li>
                                        <li className="flex items-center space-x-2 text-xs text-slate-800 font-semibold">
                                            <svg className="w-4 h-4 text-rose-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Despacho e instalación a domicilio</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* ONLY THIS BUTTON IS CLICKABLE - Aligned at the Bottom */}
                            <div className="pt-4">
                                <Link
                                    href="/nosotros"
                                    className="w-full py-4 bg-slate-950 hover:bg-rose-600 text-white font-bold rounded-2xl text-center text-sm transition-all shadow-md flex items-center justify-center space-x-2 group hover:shadow-lg active:scale-98"
                                >
                                    <span>Conoce Más sobre el Funcionamiento</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* VIBRANT IMPACT METRICS COUNTER BAR */}
            <section className="relative py-16 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 text-white shadow-xl overflow-hidden z-10">
                
                {/* Micro-Geometric Dot Pattern Texture */}
                <div 
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)`,
                        backgroundSize: '24px 24px'
                    }}
                ></div>

                {/* Subtle Radial Ambient Glows */}
                <div className="absolute -top-16 -left-16 w-80 h-80 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-pink-400/30 rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 cursor-default shadow-xs">
                            <span className="block text-4xl sm:text-5xl font-black text-white tracking-tight">180+</span>
                            <span className="text-xs sm:text-sm font-extrabold text-rose-100 uppercase tracking-wider mt-2 block">Camas Clínicas Entregadas</span>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 cursor-default shadow-xs">
                            <span className="block text-4xl sm:text-5xl font-black text-white tracking-tight">250+</span>
                            <span className="text-xs sm:text-sm font-extrabold text-rose-100 uppercase tracking-wider mt-2 block">Sillas de Ruedas Facilitadas</span>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 cursor-default shadow-xs">
                            <span className="block text-4xl sm:text-5xl font-black text-white tracking-tight">500+</span>
                            <span className="text-xs sm:text-sm font-extrabold text-rose-100 uppercase tracking-wider mt-2 block">Familias Beneficiadas</span>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 cursor-default shadow-xs">
                            <span className="block text-4xl sm:text-5xl font-black text-white tracking-tight">65+</span>
                            <span className="text-xs sm:text-sm font-extrabold text-rose-100 uppercase tracking-wider mt-2 block">Voluntarios Activos</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* AVISOS DESTACADOS SECTION */}
            {avisosDestacados && avisosDestacados.length > 0 && (
                <section className="py-16 bg-rose-50/30 border-b border-rose-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                            <div>
                                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Avisos Importantes</span>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                                    Información para la Comunidad
                                </h2>
                            </div>
                            <Link
                                href="/avisos"
                                className="text-sm font-bold text-rose-600 hover:underline flex items-center space-x-1"
                            >
                                <span>Ver todos los avisos ({avisosDestacados.length})</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {avisosDestacados.map((aviso) => (
                                <NoticeCard key={aviso.id} aviso={aviso} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* NOTICIAS RECIENTES */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
                        <div>
                            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Actualidad</span>
                            <h2 className="text-3xl font-extrabold text-slate-950">
                                Noticias e hitos institucionales
                            </h2>
                        </div>
                        <Link
                            href="/noticias"
                            className="px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:border-rose-500 hover:text-rose-600 transition-colors shadow-2xs"
                        >
                            Ver Archivo de Noticias
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {noticiasRecientes.map((noticia) => (
                            <NewsCard key={noticia.id} noticia={noticia} />
                        ))}
                    </div>
                </div>
            </section>

            {/* PRÓXIMAS ACTIVIDADES BANNER */}
            <section className="py-16 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white border border-rose-100 rounded-3xl p-8 sm:p-12 text-slate-950 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        <div className="space-y-4 max-w-2xl">
                            <span className="px-3 py-1 bg-rose-50 text-rose-700 text-xs font-bold rounded-full border border-rose-200 uppercase tracking-wide">
                                Calendario Comunitario
                            </span>
                            <h2 className="text-3xl font-black">
                                Revisa los próximos operativos y actividades
                            </h2>
                            <p className="text-slate-700 text-sm leading-relaxed font-semibold">
                                Mantente informado sobre nuestras jornadas de entrega, capacitaciones para cuidadores y reuniones de voluntarios en el calendario mensual.
                            </p>
                        </div>
                        <Link
                            href="/calendario"
                            className="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all shrink-0 text-center text-sm"
                        >
                            Ver Calendario Completo
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA DONACIONES */}
            <section className="py-16 bg-white border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-black">¿Prefieres ayudar con una donación?</h2>
                        <p className="text-rose-50 text-sm sm:text-base font-medium max-w-xl mx-auto">
                            Tu aporte en dinero o en insumos nos permite seguir entregando ayudas técnicas de salud gratuitas y dignas.
                        </p>
                        <Link
                            href="/donaciones"
                            className="inline-block px-8 py-3.5 bg-white text-rose-700 font-extrabold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all text-sm"
                        >
                            Quiero Donar
                        </Link>
                    </div>
                </div>
            </section>

        </PublicLayout>
    );
}
