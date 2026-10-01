import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';

function IconoArchivo({ extension }) {
    const colores = {
        PDF: 'bg-rose-100 text-rose-600',
        DOC: 'bg-blue-100 text-blue-600',
        DOCX: 'bg-blue-100 text-blue-600',
        XLS: 'bg-emerald-100 text-emerald-600',
        XLSX: 'bg-emerald-100 text-emerald-600',
    };

    return (
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-black text-[10px] ${colores[extension] || 'bg-slate-100 text-slate-600'}`}>
            {extension || 'ARCH'}
        </div>
    );
}

export default function Index({ intro, documentosPorCategoria }) {
    const categorias = Object.keys(documentosPorCategoria || {});

    return (
        <PublicLayout>
            <Head title="Transparencia — Fundación Miguel Ángel Gamboa" />

            {/* Header Banner */}
            <div className="bg-gradient-to-r from-rose-50 via-white to-slate-50 text-slate-900 py-14 sm:py-18 border-b border-rose-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
                    <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block mb-2">Gestión Responsable</span>
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950">
                        {intro?.titulo || 'Transparencia'}
                    </h1>
                    <p className="text-slate-700 text-base sm:text-lg max-w-2xl mt-3 font-semibold">
                        {intro?.contenido || ''}
                    </p>
                </div>
            </div>

            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

                    {categorias.length === 0 && (
                        <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
                            <p className="text-slate-600 font-semibold">
                                Estamos preparando la publicación de nuestros documentos institucionales. Vuelve pronto.
                            </p>
                        </div>
                    )}

                    {categorias.map((categoria) => (
                        <div key={categoria} className="space-y-5">
                            <h2 className="text-2xl font-extrabold text-slate-950 border-b border-slate-200 pb-3">
                                {categoria}
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {documentosPorCategoria[categoria].map((doc) => (
                                    <a
                                        key={doc.id}
                                        href={`/storage/${doc.archivo}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-4 bg-slate-50 hover:bg-rose-50/60 border border-slate-200 hover:border-rose-300 rounded-2xl p-5 transition-all duration-200"
                                    >
                                        <IconoArchivo extension={doc.extension} />

                                        <div className="min-w-0 flex-grow">
                                            <div className="flex items-baseline gap-1.5">
                                                <p className="font-bold text-slate-950 text-sm line-clamp-2 group-hover:text-rose-700">
                                                    {doc.titulo}
                                                </p>
                                                {doc.anio && (
                                                    <span className="shrink-0 text-xs font-semibold text-slate-400">({doc.anio})</span>
                                                )}
                                            </div>
                                            {doc.descripcion && (
                                                <p className="text-slate-500 text-xs font-medium truncate">{doc.descripcion}</p>
                                            )}
                                            {doc.tamano_legible && (
                                                <p className="text-slate-400 text-[11px] font-semibold mt-0.5">{doc.tamano_legible}</p>
                                            )}
                                        </div>

                                        <svg className="w-5 h-5 text-slate-400 group-hover:text-rose-600 shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </section>
        </PublicLayout>
    );
}
