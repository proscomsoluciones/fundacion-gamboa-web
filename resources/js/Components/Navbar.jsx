import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import Logo from './Logo';

export default function Navbar() {
    const { url } = usePage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Todos los enlaces quedan siempre visibles en el menú de escritorio (sin submenús ocultos)
    const navLinks = [
        { name: 'Inicio', href: '/' },
        { name: 'Nosotros', href: '/nosotros' },
        { name: 'Nuestros Voluntarios', href: '/voluntarios' },
        { name: 'Noticias', href: '/noticias' },
        { name: 'Avisos', href: '/avisos' },
        { name: 'Calendario', href: '/calendario' },
        { name: 'Transparencia', href: '/transparencia' },
        { name: 'Contacto', href: '/contacto' },
        { name: 'Donar', href: '/donaciones' },
    ];

    const isActive = (href) => {
        if (href === '/' && url === '/') return true;
        if (href !== '/' && url.startsWith(href)) return true;
        return false;
    };

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-md transition-all duration-300">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-8">
                <div className="flex justify-between items-center h-24 xl:h-28 py-3 gap-3">

                    {/* Official Foundation SVG Logo */}
                    <Link href="/" className="flex items-center shrink-0 py-1">
                        <Logo className="h-16 sm:h-20 xl:h-24 w-auto max-w-[220px] sm:max-w-[260px] xl:max-w-[300px]" />
                    </Link>

                    {/* Desktop Navigation (siempre con todos los enlaces visibles, sin "Más") */}
                    <nav className="hidden xl:flex items-center flex-wrap justify-center gap-x-0.5 gap-y-1 flex-1 min-w-0">
                        {navLinks.map((link) => {
                            const active = isActive(link.href);
                            const esDonar = link.href === '/donaciones';
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`px-2.5 py-2 rounded-lg text-[13px] whitespace-nowrap transition-all duration-200 ${
                                        active
                                            ? 'bg-rose-50 text-rose-700 font-black shadow-2xs'
                                            : esDonar
                                                ? 'text-rose-600 hover:bg-rose-50 font-black'
                                                : 'text-slate-700 hover:text-rose-600 hover:bg-slate-50 font-bold'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Action Buttons */}
                    <div className="hidden xl:flex items-center gap-2 shrink-0">
                        <Link
                            href="/voluntarios"
                            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-black text-[13px] whitespace-nowrap shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-200 flex items-center space-x-1.5"
                        >
                            <svg className="w-4 h-4 animate-pulse shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span>Hazte Voluntario</span>
                        </Link>
                    </div>

                    {/* Mobile / Tablet Hamburger Button (pantallas menores a xl) */}
                    <div className="flex xl:hidden items-center space-x-2">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-3 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-hidden"
                            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        >
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile / Tablet Drawer Menu */}
            {mobileMenuOpen && (
                <div className="xl:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fade-in max-h-[calc(100vh-6rem)] overflow-y-auto">
                    {navLinks.map((link) => {
                        const active = isActive(link.href);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-4 py-3 rounded-xl text-base transition-all ${
                                    active
                                        ? 'bg-rose-50 text-rose-700 font-black'
                                        : 'text-slate-700 hover:bg-slate-50 font-bold'
                                }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2">
                        <Link
                            href="/voluntarios"
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold text-center shadow-md flex items-center justify-center space-x-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span>Hazte Voluntario</span>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
