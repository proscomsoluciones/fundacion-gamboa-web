import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import CopyableField from '@/Components/CopyableField';
import { Head, Link } from '@inertiajs/react';

export default function Index({ intro, cuentasBancarias, insumosNecesarios, contactoCoordinacion }) {
    return (
        <PublicLayout>
            <Head title="Cómo Donar — Fundación Miguel Ángel Gamboa" />

            {/* Header Banner */}
            <div className="bg-gradient-to-r from-rose-50 via-white to-slate-50 text-slate-900 py-14 sm:py-18 border-b border-rose-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
                    <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block mb-2">Súmate a la Causa</span>
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950">
                        {intro?.titulo || 'Cómo Donar'}
                    </h1>
                    <p className="text-slate-700 text-base sm:text-lg max-w-2xl mt-3 font-semibold">
                        {intro?.contenido || ''}
                    </p>
                </div>
            </div>

            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                        {/* DONACIONES EN DINERO */}
                        <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 shadow-lg border border-rose-100 space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2m9-8a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">Aporte Monetario</span>
                                    <h2 className="text-2xl font-black text-slate-950">Dona en Dinero</h2>
                                </div>
                            </div>

                            {cuentasBancarias.length > 0 ? (
                                <div className="space-y-5">
                                    {cuentasBancarias.map((cuenta) => (
                                        <div key={cuenta.id} className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs">
                                            <div className="flex items-center justify-between mb-1">
                                                <h3 className="font-extrabold text-slate-950 text-base">{cuenta.banco}</h3>
                                                <span className="px-2.5 py-0.5 bg-rose-50 border border-rose-200 text-rose-700 text-[11px] font-bold rounded-full">
                                                    {cuenta.tipo_cuenta}
                                                </span>
                                            </div>

                                            <div className="mt-2">
                                                <CopyableField label="Número de cuenta" value={cuenta.numero_cuenta} />
                                                <CopyableField label="RUT del titular" value={cuenta.rut_titular} />
                                                <CopyableField label="Nombre del titular" value={cuenta.nombre_titular} />
                                            </div>
                                        </div>
                                    ))}

                                    <p className="text-xs text-slate-500 font-medium leading-relaxed pt-1">
                                        Agradecemos profundamente cada aporte. Tu generosidad nos permite seguir entregando ayudas técnicas gratuitas a las familias que más lo necesitan.
                                    </p>
                                </div>
                            ) : (
                                <p className="text-sm text-slate-600 font-medium bg-white rounded-2xl p-5 border border-slate-200">
                                    Estamos actualizando nuestros datos bancarios. Escríbenos y te los enviamos directamente.
                                </p>
                            )}
                        </div>

                        {/* DONACIONES EN INSUMOS */}
                        <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 shadow-lg border border-pink-100 space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-14 h-14 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-pink-600 uppercase tracking-wider block">Aporte en Especies</span>
                                    <h2 className="text-2xl font-black text-slate-950">Dona en Insumos</h2>
                                </div>
                            </div>

                            {insumosNecesarios.length > 0 ? (
                                <ul className="space-y-3">
                                    {insumosNecesarios.map((insumo) => (
                                        <li
                                            key={insumo.id}
                                            className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex items-start justify-between gap-3"
                                        >
                                            <div>
                                                <p className="font-bold text-slate-950 text-sm">{insumo.nombre}</p>
                                                {insumo.descripcion && (
                                                    <p className="text-slate-500 text-xs font-medium mt-0.5">{insumo.descripcion}</p>
                                                )}
                                            </div>
                                            {insumo.urgente && (
                                                <span className="shrink-0 px-2.5 py-1 bg-rose-600 text-white text-[10px] font-black uppercase rounded-full">
                                                    Urgente
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-sm text-slate-600 font-medium bg-white rounded-2xl p-5 border border-slate-200">
                                    Cualquier ayuda técnica de salud en buen estado (camas clínicas, sillas de ruedas, colchones antiescaras, andadores) es bienvenida. Contáctanos para coordinar la recepción.
                                </p>
                            )}

                            {contactoCoordinacion?.whatsapp_link && (
                                <a
                                    href={contactoCoordinacion.whatsapp_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#1fb959] text-white font-bold rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                                >
                                    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 01-1.26-4.38c0-4.55 3.7-8.25 8.25-8.25 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 012.42 5.83c0 4.55-3.71 8.24-8.26 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.47-.01a.9.9 0 00-.65.31c-.23.25-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.17 1.73 2.64 4.2 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29z" />
                                    </svg>
                                    <span>
                                        Coordinar entrega con {contactoCoordinacion.nombre.split(' ')[0]}
                                    </span>
                                </a>
                            )}
                        </div>

                    </div>

                    {/* CTA FINAL */}
                    <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center space-y-4">
                        <h3 className="text-2xl sm:text-3xl font-black">¿Prefieres colaborar con tu tiempo?</h3>
                        <p className="text-rose-50 text-sm sm:text-base font-medium max-w-xl mx-auto">
                            También puedes sumarte como voluntario y ayudarnos directamente en terreno.
                        </p>
                        <Link
                            href="/voluntarios"
                            className="inline-block px-8 py-3.5 bg-white text-rose-700 font-extrabold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all text-sm"
                        >
                            Quiero Ser Voluntario
                        </Link>
                    </div>

                </div>
            </section>
        </PublicLayout>
    );
}
