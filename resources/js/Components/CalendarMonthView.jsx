import React, { useState } from 'react';
import { router } from '@inertiajs/react';

export default function CalendarMonthView({ actividades, mesActual, nombreMes }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDayEvents, setSelectedDayEvents] = useState([]);

    const [yearStr, monthStr] = mesActual.split('-');
    const currentYear = parseInt(yearStr, 10);
    const currentMonth = parseInt(monthStr, 10) - 1;

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    let startDayOfWeek = firstDayOfMonth.getDay() - 1;
    if (startDayOfWeek === -1) startDayOfWeek = 6;

    const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const eventsByDay = {};
    actividades.forEach((act) => {
        const d = new Date(act.fecha_inicio);
        const dayNum = d.getDate();
        if (!eventsByDay[dayNum]) {
            eventsByDay[dayNum] = [];
        }
        eventsByDay[dayNum].push(act);
    });

    const handleMonthChange = (direction) => {
        let newYear = currentYear;
        let newMonth = currentMonth + direction;
        if (newMonth < 0) {
            newMonth = 11;
            newYear -= 1;
        } else if (newMonth > 11) {
            newMonth = 0;
            newYear += 1;
        }
        const formattedMonth = String(newMonth + 1).padStart(2, '0');
        router.get('/calendario', { mes: `${newYear}-${formattedMonth}` }, { preserveState: true });
    };

    const handleDayClick = (dayNum) => {
        const events = eventsByDay[dayNum] || [];
        const [mes, anio] = nombreMes.split(' ');
        const dateStr = `${dayNum} de ${mes.toLowerCase()} de ${anio}`;
        setSelectedDate(dateStr);
        setSelectedDayEvents(events);
    };

    return (
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/90">
            
            {/* Header / Month Selector */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 border-b border-slate-200 pb-6">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-950 capitalize tracking-tight">
                        {nombreMes}
                    </h2>
                    <p className="text-slate-600 text-sm mt-1 font-semibold">
                        Haz clic en un día para ver las actividades institucionales programadas.
                    </p>
                </div>

                <div className="flex items-center space-x-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                    <button
                        onClick={() => handleMonthChange(-1)}
                        className="p-2.5 rounded-xl hover:bg-white text-slate-800 transition-all shadow-2xs font-bold"
                        title="Mes anterior"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => router.get('/calendario', {}, { preserveState: true })}
                        className="px-4 py-2 text-xs font-extrabold text-rose-700 hover:bg-white rounded-xl transition-all shadow-2xs"
                    >
                        Mes Actual
                    </button>
                    <button
                        onClick={() => handleMonthChange(1)}
                        className="p-2.5 rounded-xl hover:bg-white text-slate-800 transition-all shadow-2xs font-bold"
                        title="Mes siguiente"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Days of week header */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-3 text-center text-xs font-black text-rose-700 tracking-wider uppercase">
                <div>Lun</div>
                <div>Mar</div>
                <div>Mié</div>
                <div>Jue</div>
                <div>Vie</div>
                <div className="text-pink-600">Sáb</div>
                <div className="text-pink-600">Dom</div>
            </div>

            {/* Calendar Days Grid */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2">
                {Array.from({ length: startDayOfWeek }).map((_, idx) => (
                    <div key={`empty-${idx}`} className="h-20 sm:h-28 rounded-2xl bg-slate-50/70 border border-slate-100/60" />
                ))}

                {monthDays.map((dayNum) => {
                    const hasEvents = eventsByDay[dayNum] && eventsByDay[dayNum].length > 0;
                    const eventCount = hasEvents ? eventsByDay[dayNum].length : 0;

                    return (
                        <button
                            key={dayNum}
                            onClick={() => handleDayClick(dayNum)}
                            className={`h-20 sm:h-28 p-2 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between group relative overflow-hidden ${
                                hasEvents
                                    ? 'bg-gradient-to-br from-rose-50 via-white to-pink-50/60 border-rose-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 ring-2 ring-rose-500/20'
                                    : 'bg-white border-slate-200/80 hover:bg-slate-50 hover:border-slate-300'
                            }`}
                        >
                            <span className={`text-xs sm:text-sm font-extrabold rounded-lg px-2 py-0.5 inline-block w-fit ${
                                hasEvents 
                                    ? 'bg-rose-600 text-white shadow-2xs' 
                                    : 'text-slate-800 bg-slate-100 group-hover:bg-rose-100 group-hover:text-rose-700'
                            }`}>
                                {dayNum}
                            </span>

                            {hasEvents && (
                                <div className="w-full">
                                    <div className="hidden sm:block">
                                        {eventsByDay[dayNum].slice(0, 2).map((ev) => (
                                            <p key={ev.id} className="text-[10px] font-extrabold text-rose-950 truncate bg-white border border-rose-200 px-1.5 py-0.5 rounded-md mb-1 shadow-2xs">
                                                {ev.titulo}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="flex justify-center sm:hidden">
                                        <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-rose-600 text-white text-[9px] font-black leading-none whitespace-nowrap">
                                            {eventCount}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Modal for Day Details */}
            {selectedDate && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs animate-fade-in">
                    <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 relative max-h-[85vh] overflow-y-auto">
                        
                        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                            <div>
                                <span className="text-xs font-black text-rose-600 uppercase tracking-wide">Eventos del Día</span>
                                <h3 className="text-xl font-black text-slate-950 mt-0.5">
                                    {selectedDate}
                                </h3>
                            </div>
                            <button
                                onClick={() => setSelectedDate(null)}
                                className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {selectedDayEvents.length === 0 ? (
                            <div className="py-8 text-center text-slate-500 font-semibold">
                                <svg className="w-12 h-12 mx-auto text-slate-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p className="text-sm">No hay actividades programadas para este día.</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {selectedDayEvents.map((act) => (
                                    <div key={act.id} className="p-5 rounded-2xl bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 space-y-2">
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-black text-slate-950 text-base">{act.titulo}</h4>
                                            <span className="text-xs font-black px-2.5 py-1 bg-rose-600 text-white rounded-full shadow-2xs">
                                                {new Date(act.fecha_inicio).toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })} hrs
                                            </span>
                                        </div>

                                        <p className="text-sm text-slate-700 font-semibold leading-relaxed">
                                            {act.descripcion}
                                        </p>

                                        {act.lugar && (
                                            <p className="text-xs font-extrabold text-rose-700 flex items-center space-x-1 pt-1">
                                                <svg className="w-4 h-4 text-rose-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                </svg>
                                                <span>Lugar: {act.lugar}</span>
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="pt-2">
                            <button
                                onClick={() => setSelectedDate(null)}
                                className="w-full py-3 bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-sm rounded-xl transition-colors shadow-md"
                            >
                                Cerrar Ventana
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
