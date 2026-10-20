import React from 'react';
import { Link } from '@inertiajs/react';
import Logo from './Logo';

export default function Footer() {
    return (
        <footer className="bg-slate-50 text-slate-700 border-t border-slate-200">
            {/* Top Helpline Banner */}
            <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 text-white py-8 px-4 sm:px-6 lg:px-8 shadow-sm">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center space-x-4 text-center md:text-left">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-xs">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-extrabold text-lg text-white">¿Necesitas ayuda técnica o soporte durante el tratamiento?</h4>
                            <p className="text-rose-100 text-sm">Acompañamos a pacientes con cáncer y movilidad reducida con catres clínicos y equipamiento especial.</p>
                        </div>
                    </div>
                    <Link
                        href="/voluntarios"
                        className="px-6 py-3 bg-white text-rose-700 font-extrabold rounded-xl shadow-md hover:bg-rose-50 transition-colors shrink-0 text-sm"
                    >
                        Contáctanos / Inscríbete
                    </Link>
                </div>
            </div>

            {/* Main Footer Links */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    
                    {/* Col 1: Foundation Info */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <Logo className="h-22 sm:h-26 lg:h-28 w-auto max-w-[260px] sm:max-w-[320px] lg:max-w-[380px]" />
                        </Link>
                        <p className="text-slate-600 text-sm leading-relaxed pt-2">
                            Organización dedicada al apoyo integral de pacientes y familias en el proceso oncológico, facilitando ayudas técnicas de salud (camas clínicas, sillas de ruedas, catres) de manera digna y gratuita.
                        </p>
                        <div className="pt-1 flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-700 border border-rose-200">
                                Juntos Contra el Cáncer
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-700 border border-slate-300">
                                Fundada el 04-07-2022
                            </span>
                        </div>
                    </div>

                    {/* Col 2: Navigation Links */}
                    <div className="space-y-4">
                        <h5 className="text-slate-900 font-bold tracking-wider uppercase text-xs">Navegación</h5>
                        <ul className="space-y-2.5 text-sm font-medium">
                            <li><Link href="/" className="hover:text-rose-600 transition-colors">Inicio</Link></li>
                            <li><Link href="/nosotros" className="hover:text-rose-600 transition-colors">Nosotros (Historia, Misión y Visión)</Link></li>
                            <li><Link href="/noticias" className="hover:text-rose-600 transition-colors">Noticias Institucionales</Link></li>
                            <li><Link href="/avisos" className="hover:text-rose-600 transition-colors">Avisos a la Comunidad</Link></li>
                            <li><Link href="/calendario" className="hover:text-rose-600 transition-colors">Calendario de Actividades</Link></li>
                            <li><Link href="/voluntarios" className="hover:text-rose-600 transition-colors">Hazte Voluntario</Link></li>
                            <li><Link href="/donaciones" className="hover:text-rose-600 transition-colors">Cómo Donar</Link></li>
                            <li><Link href="/transparencia" className="hover:text-rose-600 transition-colors">Transparencia</Link></li>
                            <li><Link href="/contacto" className="hover:text-rose-600 transition-colors">Contacto Directo</Link></li>
                        </ul>
                    </div>

                    {/* Col 3: Technical Aid Types */}
                    <div className="space-y-4">
                        <h5 className="text-slate-900 font-bold tracking-wider uppercase text-xs">Ayudas Técnicas</h5>
                        <ul className="space-y-2 text-sm text-slate-600 font-medium">
                            <li className="flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                                <span>Camas y Catres Clínicos Eléctricos</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                                <span>Colchones Antiescaras</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                                <span>Sillas de Ruedas Estándar y Neurológicas</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                                <span>Andadores y Bastones</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                                <span>Accesorios Kinesiológicos</span>
                            </li>
                        </ul>
                    </div>

                    {/* Col 4: Contact & Hours */}
                    <div className="space-y-4">
                        <h5 className="text-slate-900 font-bold tracking-wider uppercase text-xs">Contacto & Sede</h5>
                        <div className="space-y-3 text-sm text-slate-600 font-medium">
                            <p className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Sede Central Institucional<br />Av. Principal #1234, Chile</span>
                            </p>
                            <p className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>F.MiguelAngelGamboa@gmail.com</span>
                            </p>
                            <p className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>952156652 / 966379509 / 94164736</span>
                            </p>
                            <p className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-rose-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Lun - Vie: 09:00 - 18:00 hrs</span>
                            </p>
                        </div>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
                    <p>© {new Date().getFullYear()} Fundación Miguel Ángel Gamboa — Juntos Contra el Cáncer. Todos los derechos reservados.</p>
                    <p className="font-semibold text-slate-600 flex items-center space-x-1">
                        <span>Web diseñada por</span>
                        <span className="text-rose-600 font-extrabold tracking-wide">PROSCOM</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
