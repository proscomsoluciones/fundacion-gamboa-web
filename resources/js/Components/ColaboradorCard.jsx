import React from 'react';

function obtenerIniciales(nombre) {
    if (!nombre) return '?';
    const partes = nombre.trim().split(/\s+/);
    const primera = partes[0]?.[0] ?? '';
    const segunda = partes.length > 1 ? partes[1][0] : '';
    return (primera + segunda).toUpperCase();
}

export default function ColaboradorCard({ colaborador }) {
    const { nombre, cargo, sector, foto, descripcion, whatsapp_link } = colaborador;

    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/90 hover:border-rose-300 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full p-6 text-center items-center group relative">

            {/* Accent Top Border Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl"></div>

            <div className="relative mt-1">
                {foto ? (
                    <img
                        src={`/storage/${foto}`}
                        alt={nombre}
                        className="w-24 h-24 rounded-full object-cover border-4 border-white ring-4 ring-rose-100/70 shadow-md group-hover:scale-105 group-hover:ring-rose-300 transition-all duration-300"
                    />
                ) : (
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600 border-4 border-white ring-4 ring-rose-100/70 shadow-md flex items-center justify-center text-white font-black text-2xl group-hover:scale-105 group-hover:ring-rose-300 transition-all duration-300">
                        {obtenerIniciales(nombre)}
                    </div>
                )}
            </div>

            <span className="mt-4 inline-block px-3.5 py-1 bg-rose-50 border border-rose-200/80 text-rose-700 text-[11px] font-extrabold uppercase tracking-wide rounded-full shadow-2xs">
                {sector}
            </span>

            <h3 className="mt-3 font-black text-slate-950 text-base leading-snug group-hover:text-rose-600 transition-colors">
                {nombre}
            </h3>

            {cargo && (
                <p className="text-slate-500 text-xs font-extrabold mt-0.5">
                    {cargo}
                </p>
            )}

            {descripcion && (
                <p className="text-slate-600 text-xs leading-relaxed mt-3 line-clamp-3 font-medium">
                    {descripcion}
                </p>
            )}

            <div className="mt-auto pt-5 w-full">
                {whatsapp_link ? (
                    <a
                        href={whatsapp_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#1fb959] text-white font-extrabold rounded-2xl text-xs shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-2"
                    >
                        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 01-1.26-4.38c0-4.55 3.7-8.25 8.25-8.25 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 012.42 5.83c0 4.55-3.71 8.24-8.26 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.47-.01a.9.9 0 00-.65.31c-.23.25-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.17 1.73 2.64 4.2 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29z" />
                        </svg>
                        <span>Escribir por WhatsApp</span>
                    </a>
                ) : (
                    <div className="w-full py-2 px-3 bg-slate-100 text-slate-500 rounded-xl text-[11px] font-bold">
                        Contacto por Sede Central
                    </div>
                )}
            </div>
        </div>
    );
}
