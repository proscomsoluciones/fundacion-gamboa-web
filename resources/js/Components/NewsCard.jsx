import React from 'react';
import { Link } from '@inertiajs/react';

export default function NewsCard({ noticia }) {
    const formattedDate = noticia.fecha_publicacion 
        ? new Date(noticia.fecha_publicacion).toLocaleDateString('es-CL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        : 'Reciente';

    return (
        <Link 
            href={`/noticias/${noticia.slug}`} 
            className="group block relative h-full focus:outline-hidden"
        >
            <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/90 group-hover:border-rose-400 group-hover:shadow-2xl group-hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative">
                
                {/* Accent Top Border Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 rounded-t-3xl"></div>

                {/* Image / Thumbnail - Full-bleed responsive header */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100 shrink-0">
                    {noticia.imagen ? (
                        <img
                            src={`/storage/${noticia.imagen}`}
                            alt={noticia.titulo}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600 flex items-center justify-center text-white">
                            <svg className="w-16 h-16 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                        </div>
                    )}

                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-black text-rose-700 border border-rose-200 shadow-md">
                        {formattedDate}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow bg-white">
                    <h3 className="text-xl font-black text-slate-950 group-hover:text-rose-600 transition-colors line-clamp-2 leading-snug mb-3">
                        {noticia.titulo}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow font-medium">
                        {noticia.resumen || noticia.contenido.replace(/<[^>]+>/g, '').substring(0, 140) + '...'}
                    </p>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                        <span className="text-xs font-extrabold text-rose-600 flex items-center space-x-1 group-hover:text-rose-700">
                            <span>Leer noticia completa</span>
                            <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </div>
                </div>

            </article>
        </Link>
    );
}
