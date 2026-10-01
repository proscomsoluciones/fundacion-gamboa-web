import React, { useState } from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import CalendarMonthView from '@/Components/CalendarMonthView';
import { Head } from '@inertiajs/react';

export default function Index({ actividades, mesActual, nombreMes }) {
    const [viewMode, setViewMode] = useState('calendar');

    return (
        <PublicLayout>
            <Head title="Calendario de Actividades — Fundación Miguel Ángel Gamboa" />

            {/* Header Banner - Luminous Light */}
            <div className="bg-gradient-to-r from-rose-50 via-white to-slate-50 text-slate-900 py-14 sm:py-18 border-b border-rose-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block mb-2">Programación Mensual</span>
                        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">Calendario de Actividades</h1>
                        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mt-3 font-medium">
                            Jornadas de sanitización, entregas de catres clínicos, talleres para cuidadores y reuniones comunitarias.
                        </p>
                    </div>

                    {/* View mode toggle */}
                    <div className="flex bg-white p-1.5 rounded-2xl border border-slate-200 shadow-xs shrink-0">
                        <button
                            onClick={() => setViewMode('calendar')}
                            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                                viewMode === 'calendar'
                                    ? 'bg-rose-600 text-white shadow-md'
                                    : 'text-slate-700 hover:bg-slate-50'
                            }`}
                        >
                            Vista Calendario
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                                viewMode === 'list'
                                    ? 'bg-rose-600 text-white shadow-md'
                                    : 'text-slate-700 hover:bg-slate-50'
                            }`}
                        >
                            Vista Lista ({actividades.length})
                        </button>
                    </div>
                </div>
            </div>

            <section className="py-12 sm:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {viewMode === 'calendar' ? (
                        <CalendarMonthView
                            actividades={actividades}
                            mesActual={mesActual}
                            nombreMes={nombreMes}
                        />
                    ) : (
                        <div className="bg-slate-50 rounded-3xl p-8 shadow-xl border border-slate-200 space-y-6">
                            <h2 className="text-2xl font-extrabold text-slate-900 capitalize">
                                Listado de Actividades ({nombreMes})
                            </h2>

                            {actividades.length === 0 ? (
                                <div className="text-center py-12 text-slate-500 font-medium">
                                    No hay actividades registradas en el mes seleccionado.
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {actividades.map((act) => (
                                        <div
                                            key={act.id}
                                            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
                                        >
                                            <div className="space-y-2">
                                                <div className="flex items-center space-x-2">
                                                    <span className="px-3 py-1 bg-rose-600 text-white font-bold text-xs rounded-full">
                                                        {new Date(act.fecha_inicio).toLocaleDateString('es-CL', {
                                                            day: 'numeric',
                                                            month: 'short',
                                                        })}
                                                    </span>
                                                    <span className="text-xs font-bold text-slate-500">
                                                        {new Date(act.fecha_inicio).toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })} hrs
                                                    </span>
                                                </div>
                                                <h3 className="font-bold text-lg text-slate-900">{act.titulo}</h3>
                                                <p className="text-sm text-slate-600 font-medium">{act.descripcion}</p>
                                                {act.lugar && (
                                                    <p className="text-xs font-bold text-rose-600 flex items-center space-x-1">
                                                        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        </svg>
                                                        <span>{act.lugar}</span>
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                </div>
            </section>
        </PublicLayout>
    );
}
