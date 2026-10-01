import React, { useState } from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';

export default function Contacto({ telefonos = [], email, horario, facebook }) {
    const [copiado, setCopiado] = useState(null);

    const handleCopy = (text, key) => {
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
            navigator.clipboard.writeText(text);
            setCopiado(key);
            setTimeout(() => setCopiado(null), 3000);
        }
    };

    return (
        <PublicLayout>
            <Head title="Contacto — Fundación Miguel Ángel Gamboa">
                <meta name="description" content="Canales de contacto directo con la Fundación del Cáncer Miguel Ángel Gamboa. Números de WhatsApp, correo electrónico y atención en Catemu." />
            </Head>

            {/* Header Banner - Luminous Light */}
            <div className="bg-gradient-to-r from-rose-50 via-white to-slate-50 text-slate-900 py-14 sm:py-18 border-b border-rose-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
                    <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block mb-2">Atención Directa</span>
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950">Contacto Directo</h1>
                    <p className="text-slate-700 text-base sm:text-lg max-w-2xl mt-3 font-semibold">
                        Comunicación rápida y directa con nuestra fundación. Contáctanos por WhatsApp, teléfono o correo electrónico.
                    </p>
                </div>
            </div>

            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    
                    {/* GRID DE CANALES DE CONTACTO */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        
                        {/* CARD 1: WHATSAPP Y TELÉFONOS */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-rose-100 shadow-md space-y-6 flex flex-col justify-between">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Respuesta Rápida</span>
                                        <h2 className="text-2xl font-black text-slate-950">WhatsApp & Teléfonos</h2>
                                    </div>
                                </div>

                                <p className="text-slate-600 text-xs font-medium leading-relaxed">
                                    Haz clic en cualquiera de nuestros números para iniciar un chat directo de WhatsApp o realizar una llamada.
                                </p>

                                <div className="space-y-3">
                                    {telefonos.map((tel, idx) => {
                                        const cleanNum = tel.formateado.replace(/\D/g, '');
                                        const waLink = `https://wa.me/569${cleanNum}?text=${encodeURIComponent('Hola, me comunico desde el sitio web de la Fundación Miguel Ángel Gamboa.')}`;
                                        
                                        return (
                                            <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                                                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                                                    {tel.label}
                                                </span>
                                                <div className="flex items-center justify-between gap-2">
                                                    <span className="font-black text-slate-900 text-base">
                                                        +56 9 {tel.formateado}
                                                    </span>
                                                    <div className="flex items-center space-x-2">
                                                        <button
                                                            onClick={() => handleCopy(`+569${cleanNum}`, `tel-${idx}`)}
                                                            className="p-2 text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors text-xs font-bold"
                                                            title="Copiar número"
                                                        >
                                                            {copiado === `tel-${idx}` ? '✓ Copiado' : 'Copiar'}
                                                        </button>
                                                        <a
                                                            href={waLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl text-xs shadow-xs transition-colors flex items-center space-x-1"
                                                        >
                                                            <span>WhatsApp</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* CARD 2: CORREO ELECTRÓNICO OFICIAL */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-rose-100 shadow-md space-y-6 flex flex-col justify-between">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">Correo Oficial</span>
                                        <h2 className="text-2xl font-black text-slate-950">Correo Electrónico</h2>
                                    </div>
                                </div>

                                <p className="text-slate-600 text-xs font-medium leading-relaxed">
                                    Para solicitudes institucionales, convenios o envío de documentos oficiales:
                                </p>

                                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                                        Casilla Oficial de la Fundación
                                    </span>
                                    <p className="font-black text-slate-900 text-base break-all">
                                        {email}
                                    </p>
                                    <div className="pt-2 flex items-center space-x-2">
                                        <a
                                            href={`mailto:${email}`}
                                            className="flex-1 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-extrabold rounded-xl text-xs text-center shadow-xs transition-colors"
                                        >
                                            Redactar Correo
                                        </a>
                                        <button
                                            onClick={() => handleCopy(email, 'email')}
                                            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors"
                                        >
                                            {copiado === 'email' ? '✓ Copiado' : 'Copiar'}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Horario de Atención Box */}
                            <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-xs space-y-2">
                                <div className="flex items-center space-x-2 text-rose-700">
                                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="font-extrabold text-xs uppercase tracking-wider">Horario de Atención</span>
                                </div>
                                <p className="font-extrabold text-slate-900 text-sm">
                                    {horario}
                                </p>
                            </div>
                        </div>

                        {/* CARD 3: REDES SOCIALES Y SEDE */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-rose-100 shadow-md space-y-6 flex flex-col justify-between">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">Redes Sociales</span>
                                        <h2 className="text-2xl font-black text-slate-950">Comunidad y Redes</h2>
                                    </div>
                                </div>

                                <p className="text-slate-600 text-xs font-medium leading-relaxed">
                                    Sigue nuestras actividades diarias, publicaciones comunitarias y avisos en Facebook:
                                </p>

                                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                                        Página Oficial en Facebook
                                    </span>
                                    <p className="font-black text-slate-900 text-base">
                                        {facebook}
                                    </p>
                                    <a
                                        href="https://www.facebook.com/search/top?q=Fundaci%C3%B3n%20Miguel%20%C3%81ngel%20Gamboa"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl text-xs shadow-xs transition-colors flex items-center justify-center space-x-2"
                                    >
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                        <span>Visitar Facebook</span>
                                    </a>
                                </div>
                            </div>

                            {/* Voluntariado Card Link */}
                            <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-5 rounded-2xl shadow-md space-y-2">
                                <h4 className="font-extrabold text-sm">¿Deseas apoyar en terreno?</h4>
                                <p className="text-rose-100 text-xs font-medium">
                                    Conoce nuestra red de voluntarios por sector y sumate como referente.
                                </p>
                                <Link
                                    href="/voluntarios"
                                    className="inline-block pt-1 text-xs font-black underline underline-offset-4 hover:text-rose-100 transition-colors"
                                >
                                    Ver Red de Voluntarios →
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* BANNER INFORMATIVO INFERIOR */}
                    <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 text-center space-y-3">
                        <h3 className="text-2xl font-black text-slate-950">
                            ¿Necesitas una Ayuda Técnica de Salud?
                        </h3>
                        <p className="text-slate-600 text-sm font-medium max-w-2xl mx-auto">
                            Comunícate directamente a nuestros números de WhatsApp para coordinar la entrega de catres clínicos, sillas de ruedas u otros insumos de salud en la comuna de Catemu y alrededores.
                        </p>
                    </div>

                </div>
            </section>
        </PublicLayout>
    );
}
