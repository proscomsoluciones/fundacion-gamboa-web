import React from 'react';

export default function NoticeCard({ aviso }) {
    const isFeatured = aviso.es_destacado;

    const formattedDate = aviso.fecha_publicacion
        ? new Date(aviso.fecha_publicacion).toLocaleDateString('es-CL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        : null;

    return (
        <div className={`p-7 rounded-3xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
            isFeatured
                ? 'bg-gradient-to-br from-white via-rose-50/40 to-pink-50/30 border-rose-200 hover:border-rose-300 shadow-md hover:shadow-xl'
                : 'bg-white border-slate-200/90 hover:border-rose-200 shadow-xs hover:shadow-md'
        }`}>
            {/* Top Accent Stripe for Featured Notices */}
            {isFeatured && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600"></div>
            )}

            <div className="space-y-4">
                {/* Header / Badge Row */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                    {isFeatured ? (
                        <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-2xs">
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span>AVISO DESTACADO</span>
                        </span>
                    ) : (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                            Comunicado Oficial
                        </span>
                    )}

                    {formattedDate && (
                        <span className="text-xs text-slate-500 font-bold">
                            {formattedDate}
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3 className={`text-xl font-black leading-snug ${
                    isFeatured ? 'text-slate-950' : 'text-slate-900'
                }`}>
                    {aviso.titulo}
                </h3>

                {/* Content */}
                <p className="text-slate-700 text-sm leading-relaxed font-semibold whitespace-pre-line">
                    {aviso.contenido}
                </p>
            </div>

            {/* Expiration Footer */}
            {aviso.fecha_expiracion && (
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
                    <span className="flex items-center space-x-1.5 text-rose-700">
                        <svg className="w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Vigente hasta: {new Date(aviso.fecha_expiracion).toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </span>
                </div>
            )}
        </div>
    );
}
