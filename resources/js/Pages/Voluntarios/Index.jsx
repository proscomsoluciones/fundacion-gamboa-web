import React, { useMemo, useState, useEffect } from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import ColaboradorCard from '@/Components/ColaboradorCard';
import { Head, useForm } from '@inertiajs/react';

export default function Index({ colaboradores = [] }) {
    const [sectorActivo, setSectorActivo] = useState('Todos');

    // Extract unique sectors dynamically
    const sectores = useMemo(
        () => ['Todos', ...new Set(colaboradores.map((c) => c.sector).filter(Boolean))],
        [colaboradores]
    );

    const [busqueda, setBusqueda] = useState('');

    const colaboradoresFiltrados = useMemo(() => {
        let resultado = colaboradores;

        if (sectorActivo !== 'Todos') {
            resultado = resultado.filter((c) => c.sector === sectorActivo);
        }

        if (busqueda.trim() !== '') {
            const query = busqueda.toLowerCase();
            resultado = resultado.filter(
                (c) =>
                    (c.nombre && c.nombre.toLowerCase().includes(query)) ||
                    (c.sector && c.sector.toLowerCase().includes(query)) ||
                    (c.cargo && c.cargo.toLowerCase().includes(query))
            );
        }

        return resultado;
    }, [colaboradores, sectorActivo, busqueda]);

    // Form logic for volunteer application
    const [num1, setNum1] = useState(3);
    const [num2, setNum2] = useState(5);
    const [clientError, setClientError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const generateChallenge = () => {
        const n1 = Math.floor(Math.random() * 8) + 2;
        const n2 = Math.floor(Math.random() * 8) + 1;
        setNum1(n1);
        setNum2(n2);
        setData('desafio_num1', n1);
        setData('desafio_num2', n2);
        setData('desafio_respuesta', '');
        setClientError('');
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        nombres: '',
        apellidos: '',
        email: '',
        telefono: '',
        direccion: '',
        interes_actividad: 'Entrega y traslado de catres clínicos',
        motivacion: '',
        desafio_num1: 3,
        desafio_num2: 5,
        desafio_respuesta: '',
        b_website: '',
    });

    useEffect(() => {
        generateChallenge();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const expectedSum = parseInt(data.desafio_num1, 10) + parseInt(data.desafio_num2, 10);
        const userValue = parseInt(data.desafio_respuesta, 10);

        if (isNaN(userValue) || userValue !== expectedSum) {
            setClientError('La respuesta al desafío de seguridad no es correcta. Por favor inténtalo nuevamente.');
            return;
        }

        setClientError('');

        post('/voluntarios', {
            onSuccess: () => {
                reset();
                generateChallenge();
                setSubmitted(true);
            },
            onError: () => {
                generateChallenge();
            }
        });
    };

    return (
        <PublicLayout>
            <Head title="Nuestros Voluntarios — Fundación Miguel Ángel Gamboa" />

            {/* Header Banner */}
            <div className="bg-gradient-to-r from-rose-50 via-white to-slate-50 text-slate-900 py-14 sm:py-18 border-b border-rose-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
                    <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block mb-2">Comunidad & Presencia Territoríal</span>
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950">Nuestros Voluntarios y Referentes</h1>
                    <p className="text-slate-700 text-base sm:text-lg max-w-3xl mt-3 font-semibold">
                        Conoce a las personas y referentes de cada sector que hacen posible la entrega transparente y digna de equipamiento médico a las familias que más lo necesitan.
                    </p>
                </div>
            </div>

            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                    {/* SECTION 1: REFERENTES Y VOLUNTARIOS POR SECTOR */}
                    {colaboradores.length > 0 && (
                        <div className="space-y-10">

                            <div className="text-center max-w-2xl mx-auto space-y-3">
                                <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block">Red Territorial</span>
                                <h2 className="text-3xl sm:text-4xl font-black text-slate-950">
                                    Referentes por Sector
                                </h2>
                                <p className="text-slate-600 text-sm font-medium">
                                    Filtra por tu sector o localidad para contactar directamente a nuestros referentes por WhatsApp.
                                </p>
                            </div>

                            {/* Search Input Bar */}
                            <div className="max-w-md mx-auto relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    value={busqueda}
                                    onChange={(e) => setBusqueda(e.target.value)}
                                    placeholder="Buscar referente o sector..."
                                    className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm font-semibold text-slate-900 focus:bg-white focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all shadow-2xs"
                                />
                                {busqueda && (
                                    <button
                                        onClick={() => setBusqueda('')}
                                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-bold text-slate-400 hover:text-rose-600"
                                    >
                                        Limpiar
                                    </button>
                                )}
                            </div>

                            {/* Sector Filter Chips - Compact Single Row Layout */}
                            {sectores.length > 1 && (
                                <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
                                    <div className="flex flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto sm:overflow-visible py-2 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                                        {sectores.map((sector) => (
                                            <button
                                                key={sector}
                                                onClick={() => setSectorActivo(sector)}
                                                className={`shrink-0 whitespace-nowrap px-3.5 sm:px-4 py-2 rounded-2xl text-xs font-extrabold transition-all duration-200 border ${
                                                    sectorActivo === sector
                                                        ? 'bg-rose-600 border-rose-600 text-white shadow-md transform scale-105'
                                                        : 'bg-white border-slate-200 text-slate-700 hover:border-rose-300 hover:text-rose-600 shadow-2xs'
                                                }`}
                                            >
                                                {sector}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Grid of Volunteer Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {colaboradoresFiltrados.map((colaborador) => (
                                    <ColaboradorCard key={colaborador.id} colaborador={colaborador} />
                                ))}
                            </div>

                        </div>
                    )}

                    {/* SECTION 2: FORMULARIO SÚMATE COMO VOLUNTARIO */}
                    <div id="sumate" className="pt-16 border-t border-slate-200 space-y-12">
                        
                        <div className="text-center max-w-2xl mx-auto space-y-3">
                            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block">Inscripción Comunitario</span>
                            <h2 className="text-3xl sm:text-4xl font-black text-slate-950">
                                Súmate a Nuestra Red de Voluntarios
                            </h2>
                            <p className="text-slate-600 text-sm font-medium">
                                Si deseas colaborar con tu tiempo, apoyo logístico o conocimientos, déjanos tus datos y nos pondremos en contacto.
                            </p>
                        </div>

                        <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
                            {submitted ? (
                                <div className="bg-rose-50 border border-rose-200 p-8 rounded-3xl text-center space-y-4 animate-fade-in">
                                    <div className="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-black text-rose-950">
                                        ¡Inscripción Completada con Éxito!
                                    </h3>
                                    <p className="text-slate-700 text-sm max-w-md mx-auto font-semibold">
                                        Hemos recibido tus datos correctamente. Nuestro equipo de coordinación se pondrá en contacto contigo muy pronto.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-md transition-all"
                                    >
                                        Enviar otra inscripción
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    
                                    {/* Honeypot field for bot trap */}
                                    <input
                                        type="text"
                                        name="b_website"
                                        value={data.b_website}
                                        onChange={(e) => setData('b_website', e.target.value)}
                                        className="hidden"
                                        tabIndex="-1"
                                        autoComplete="off"
                                    />

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-800 uppercase mb-2">
                                                Nombres *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={data.nombres}
                                                onChange={(e) => setData('nombres', e.target.value)}
                                                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                                                placeholder="Ej: Juan Carlos"
                                            />
                                            {errors.nombres && <p className="text-rose-600 text-xs font-bold mt-1">{errors.nombres}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-slate-800 uppercase mb-2">
                                                Apellidos *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={data.apellidos}
                                                onChange={(e) => setData('apellidos', e.target.value)}
                                                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                                                placeholder="Ej: Pérez Soto"
                                            />
                                            {errors.apellidos && <p className="text-rose-600 text-xs font-bold mt-1">{errors.apellidos}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-800 uppercase mb-2">
                                                Correo Electrónico *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                                                placeholder="ejemplo@correo.com"
                                            />
                                            {errors.email && <p className="text-rose-600 text-xs font-bold mt-1">{errors.email}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-slate-800 uppercase mb-2">
                                                Teléfono de Contacto *
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                value={data.telefono}
                                                onChange={(e) => setData('telefono', e.target.value)}
                                                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                                                placeholder="+56 9 1234 5678"
                                            />
                                            {errors.telefono && <p className="text-rose-600 text-xs font-bold mt-1">{errors.telefono}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-800 uppercase mb-2">
                                            Sector / Dirección o Comuna
                                        </label>
                                        <input
                                            type="text"
                                            value={data.direccion}
                                            onChange={(e) => setData('direccion', e.target.value)}
                                            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                                            placeholder="Ej: Villa Raúl Silva Henríquez"
                                        />
                                    </div>



                                    <div>
                                        <label className="block text-xs font-bold text-slate-800 uppercase mb-2">
                                            ¿Por qué deseas sumarte? (Opcional)
                                        </label>
                                        <textarea
                                            rows="3"
                                            value={data.motivacion}
                                            onChange={(e) => setData('motivacion', e.target.value)}
                                            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                                            placeholder="Cuéntanos brevemente tu motivación o experiencia..."
                                        />
                                    </div>

                                    {/* Security Math Challenge */}
                                    <div className="bg-white p-4 rounded-2xl border border-rose-200 space-y-2">
                                        <label className="block text-xs font-bold text-rose-700 uppercase">
                                            Verificación de Seguridad Anti-Spam *
                                        </label>
                                        <div className="flex items-center space-x-3">
                                            <span className="text-sm font-extrabold text-slate-800">
                                                ¿Cuánto es {num1} + {num2}?
                                            </span>
                                            <input
                                                type="number"
                                                required
                                                value={data.desafio_respuesta}
                                                onChange={(e) => setData('desafio_respuesta', e.target.value)}
                                                className="w-24 px-3 py-2 border border-slate-300 rounded-xl text-sm font-bold text-center focus:ring-2 focus:ring-rose-500 outline-none"
                                                placeholder="Resultado"
                                            />
                                        </div>
                                        {clientError && <p className="text-rose-600 text-xs font-bold pt-1">{clientError}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full py-4 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-extrabold rounded-2xl shadow-lg hover:shadow-xl transition-all text-sm uppercase tracking-wider"
                                    >
                                        {processing ? 'Enviando Registro...' : 'Enviar Solicitud de Inscripción'}
                                    </button>
                                </form>
                            )}
                        </div>

                    </div>

                </div>
            </section>
        </PublicLayout>
    );
}
