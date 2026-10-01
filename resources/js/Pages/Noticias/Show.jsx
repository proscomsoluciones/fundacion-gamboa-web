import React, { useState } from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import NewsCard from '@/Components/NewsCard';
import { Head, Link } from '@inertiajs/react';

export default function Show({ noticia, relacionadas }) {
    const [copiado, setCopiado] = useState(false);

    const formattedDate = noticia.fecha_publicacion
        ? new Date(noticia.fecha_publicacion).toLocaleDateString('es-CL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        : 'Reciente';

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareTitle = noticia.titulo;

    const handleCopyLink = () => {
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
            navigator.clipboard.writeText(shareUrl);
            setCopiado(true);
            setTimeout(() => setCopiado(false), 3000);
        }
    };

    const seoDescription = noticia.resumen || noticia.contenido.replace(/<[^>]+>/g, '').substring(0, 160);
    const imageUrl = noticia.imagen ? `${typeof window !== 'undefined' ? window.location.origin : ''}/storage/${noticia.imagen}` : '';

    return (
        <PublicLayout>
            <Head title={`${noticia.titulo} — Fundación Miguel Ángel Gamboa`}>
                <meta name="description" content={seoDescription} />
                <meta property="og:title" content={noticia.titulo} />
                <meta property="og:description" content={seoDescription} />
                {imageUrl && <meta property="og:image" content={imageUrl} />}
                <meta property="og:type" content="article" />
                <meta property="og:url" content={shareUrl} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={noticia.titulo} />
                <meta name="twitter:description" content={seoDescription} />
                {imageUrl && <meta name="twitter:image" content={imageUrl} />}
            </Head>

            {/* Header / Article Hero */}
            <div className="bg-gradient-to-r from-rose-50 via-white to-slate-50 text-slate-900 py-14 sm:py-18 border-b border-rose-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
                    <Link
                        href="/noticias"
                        className="inline-flex items-center text-xs font-bold text-rose-600 hover:text-rose-700 transition-colors uppercase tracking-wider space-x-1"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Volver a Noticias</span>
                    </Link>

                    <div>
                        <span className="inline-block px-3 py-1 bg-rose-100 text-rose-700 text-xs font-bold rounded-full border border-rose-200">
                            {formattedDate}
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-slate-900">
                        {noticia.titulo}
                    </h1>
                </div>
            </div>

            {/* Article Body Container */}
            <article className="py-12 sm:py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    
                    {/* Main Featured Image - Balanced height for PC, Laptop & Mobile */}
                    {noticia.imagen && (
                        <div className="relative w-full max-h-[380px] sm:max-h-[440px] lg:max-h-[480px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-950 flex items-center justify-center">
                            {/* Ambient background fill */}
                            <img
                                src={`/storage/${noticia.imagen}`}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover blur-xl opacity-35 scale-110"
                            />
                            {/* Foreground complete image */}
                            <img
                                src={`/storage/${noticia.imagen}`}
                                alt={noticia.titulo}
                                className="relative z-10 max-h-[380px] sm:max-h-[440px] lg:max-h-[480px] w-auto max-w-full object-contain mx-auto"
                            />
                        </div>
                    )}

                    {/* Resumen Callout */}
                    {noticia.resumen && (
                        <div className="p-6 rounded-2xl bg-rose-50 border-l-4 border-rose-600 text-rose-950 font-medium text-lg leading-relaxed shadow-xs">
                            {noticia.resumen}
                        </div>
                    )}

                    {/* Full HTML Content */}
                    <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 shadow-md border border-slate-200">
                        <div
                            className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6 font-medium"
                            dangerouslySetInnerHTML={{ __html: noticia.contenido }}
                        />
                    </div>

                    {/* SECCIÓN DE COMPARTIR EN REDES SOCIALES & WHATSAPP */}
                    <div className="bg-gradient-to-r from-rose-50 via-pink-50 to-rose-50 rounded-3xl p-6 sm:p-8 border border-rose-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="space-y-1 text-center md:text-left">
                            <span className="text-xs font-extrabold text-rose-600 uppercase tracking-widest block">
                                Difunde esta información
                            </span>
                            <h4 className="text-xl font-extrabold text-slate-950">
                                Compartir esta Noticia
                            </h4>
                            <p className="text-xs text-slate-600 font-medium">
                                Ayúdanos a informar a nuestra comunidad compartiendo en redes sociales.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                            {/* WhatsApp Button */}
                            <a
                                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-2xl text-xs shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                                </svg>
                                <span>WhatsApp</span>
                            </a>

                            {/* Facebook Button */}
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl text-xs shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                                <span>Facebook</span>
                            </a>

                            {/* X / Twitter Button */}
                            <a
                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 px-4 py-3 bg-slate-950 hover:bg-slate-800 text-white font-extrabold rounded-2xl text-xs shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                                <span>X (Twitter)</span>
                            </a>

                            {/* Copy Link Button */}
                            <button
                                onClick={handleCopyLink}
                                className={`inline-flex items-center space-x-2 px-4 py-3 font-extrabold rounded-2xl text-xs shadow-md transition-all hover:scale-105 active:scale-95 ${
                                    copiado
                                        ? 'bg-rose-600 text-white'
                                        : 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-300'
                                }`}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                </svg>
                                <span>{copiado ? '¡Copiado!' : 'Copiar Enlace'}</span>
                            </button>
                        </div>
                    </div>

                    {/* Related Articles Section */}
                    {relacionadas && relacionadas.length > 0 && (
                        <div className="pt-12 border-t border-slate-200 space-y-8">
                            <h3 className="text-2xl font-extrabold text-slate-900">
                                Otras Noticias Institucionales
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relacionadas.map((item) => (
                                    <NewsCard key={item.id} noticia={item} />
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </article>
        </PublicLayout>
    );
}
