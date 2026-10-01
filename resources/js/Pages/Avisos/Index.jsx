import React, { useState, useEffect } from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import NoticeCard from '@/Components/NoticeCard';
import { Head, router, Link } from '@inertiajs/react';

export default function Index({ avisos, filtros }) {
    const [buscar, setBuscar] = useState(filtros.buscar || '');

    useEffect(() => {
        setBuscar(filtros.buscar || '');
    }, [filtros.buscar]);

    const handleSearch = (e) => {
        e.preventDefault();
        router.get('/avisos', buscar.trim() ? { buscar: buscar.trim() } : {}, {
            preserveState: true,
            replace: true,
        });
    };

    const handleClear = () => {
        setBuscar('');
        router.get('/avisos', {}, { preserveState: true, replace: true });
    };

    return (
        <PublicLayout>
            <Head title="Avisos a la Comunidad — Fundación Miguel Ángel Gamboa" />

            {/* Header Banner - Luminous Light */}
            <div className="bg-gradient-to-r from-rose-50 via-white to-slate-50 text-slate-900 py-14 sm:py-18 border-b border-rose-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block mb-2">Tablón de Anuncios</span>
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950">Avisos e Informaciones</h1>
                    <p className="text-slate-700 text-base sm:text-lg max-w-2xl mt-3 font-semibold">
                        Revisa los comunicados oficiales, aperturas de postulación a ayudas técnicas y horarios de atención.
                    </p>

                    {/* Search Form */}
                    <form onSubmit={handleSearch} className="mt-8 max-w-xl flex gap-2">
                        <div className="relative w-full">
                            <input
                                type="text"
                                value={buscar}
                                onChange={(e) => setBuscar(e.target.value)}
                                placeholder="Buscar avisos..."
                                className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-rose-500 text-sm shadow-xs font-semibold"
                            />
                            {buscar && (
                                <button
                                    type="button"
                                    onClick={handleClear}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-700 text-xs font-bold rounded-lg hover:bg-slate-100 transition-colors"
                                >
                                    ✕ Limpiar
                                </button>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="px-7 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-extrabold rounded-2xl transition-all shadow-md text-sm shrink-0 flex items-center space-x-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span>Buscar</span>
                        </button>
                    </form>
                </div>
            </div>

            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {filtros.buscar && (
                        <div className="mb-8 p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-between">
                            <span className="text-sm font-semibold text-rose-900">
                                Mostrando resultados para: <strong className="font-black text-rose-700">"{filtros.buscar}"</strong>
                            </span>
                            <button
                                onClick={handleClear}
                                className="text-xs font-bold text-rose-700 hover:underline"
                            >
                                Restablecer todos los avisos
                            </button>
                        </div>
                    )}

                    {avisos.data.length === 0 ? (
                        <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200 p-8 space-y-3">
                            <svg className="w-16 h-16 text-slate-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.684A1.761 1.761 0 013 12c0-.97.784-1.76 1.75-1.76.62 0 1.168.32 1.48.805" />
                            </svg>
                            <h3 className="text-lg font-bold text-slate-900">No hay avisos registrados</h3>
                            <p className="text-slate-500 text-sm font-medium">Actualmente no existen avisos que coincidan con la búsqueda.</p>
                            {filtros.buscar && (
                                <div className="pt-2">
                                    <button
                                        onClick={handleClear}
                                        className="px-4 py-2 bg-rose-600 text-white font-bold text-xs rounded-xl hover:bg-rose-700 transition-colors shadow-xs"
                                    >
                                        Ver todos los avisos
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {avisos.data.map((aviso) => (
                                <NoticeCard key={aviso.id} aviso={aviso} />
                            ))}
                        </div>
                    )}

                    {/* Pagination Links */}
                    {avisos.links && avisos.links.length > 3 && (
                        <div className="mt-12 flex justify-center items-center space-x-2">
                            {avisos.links.map((link, key) => (
                                link.url ? (
                                    <Link
                                        key={key}
                                        href={link.url}
                                        className={`px-4 py-2 text-sm font-bold rounded-xl border transition-all ${
                                            link.active
                                                ? 'bg-rose-600 border-rose-600 text-white shadow-xs'
                                                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                                        }`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ) : (
                                    <span
                                        key={key}
                                        className="px-4 py-2 text-sm text-slate-400 border border-slate-200 rounded-xl cursor-not-allowed opacity-50"
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                )
                            ))}
                        </div>
                    )}

                </div>
            </section>
        </PublicLayout>
    );
}
