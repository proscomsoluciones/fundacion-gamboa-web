import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';

export default function MisionVision({ mision, vision }) {
    return (
        <PublicLayout>
            <Head title="Misión y Visión — Fundación Miguel Ángel Gamboa" />

            {/* Header Banner - Luminous Light */}
            <div className="bg-gradient-to-r from-rose-50 via-white to-slate-50 text-slate-900 py-14 sm:py-18 border-b border-rose-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
                    <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block mb-2">Principios y Valores</span>
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">Misión y Visión</h1>
                    <p className="text-slate-600 text-base sm:text-lg max-w-2xl mt-3 font-medium">
                        Los pilares éticos e institucionales que guían nuestro trabajo en la lucha contra el cáncer y el apoyo en salud.
                    </p>
                </div>
            </div>

            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    
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
                                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                                    {mision.titulo || 'Misión Institucional'}
                                </h2>
                            </div>

                            <div 
                                className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-base font-medium"
                                dangerouslySetInnerHTML={{ __html: mision.contenido }}
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
                                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                                    {vision.titulo || 'Visión Institucional'}
                                </h2>
                            </div>

                            <div 
                                className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-base font-medium"
                                dangerouslySetInnerHTML={{ __html: vision.contenido }}
                            />
                        </div>

                    </div>

                    {/* VALORES CARD */}
                    <div className="bg-gradient-to-r from-rose-50 via-pink-50 to-rose-50 rounded-3xl p-8 sm:p-12 text-slate-900 shadow-xl space-y-8 border border-rose-200">
                        <div className="text-center max-w-2xl mx-auto space-y-2">
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Nuestros Valores Fundamentales</h3>
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
            </section>
        </PublicLayout>
    );
}
