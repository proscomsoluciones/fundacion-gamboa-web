import React, { useState, useEffect } from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Registro() {
    // Generate random math challenge numbers
    const [num1, setNum1] = useState(3);
    const [num2, setNum2] = useState(5);
    const [clientError, setClientError] = useState('');

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
        b_website: '', // Honeypot trap for bots
    });

    useEffect(() => {
        generateChallenge();
    }, []);

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Client-side math check before submitting
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
            <Head title="Registro de Voluntarios — Fundación Miguel Ángel Gamboa" />

            {/* Header Banner - Luminous Light */}
            <div className="bg-gradient-to-r from-rose-50 via-white to-slate-50 text-slate-900 py-14 sm:py-18 border-b border-rose-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
                    <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block mb-2">Comunidad en Acción</span>
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950">Únete como Voluntario</h1>
                    <p className="text-slate-700 text-base sm:text-lg max-w-2xl mt-3 font-semibold">
                        Tu tiempo y vocación apoyan la labor de la Fundación Miguel Ángel Gamboa — Juntos contra el cáncer.
                    </p>
                </div>
            </div>

            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {submitted && (
                        <div className="bg-rose-50 border border-rose-200 p-8 rounded-3xl text-center space-y-4 mb-8 animate-fade-in shadow-md">
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
                                className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-sm transition-colors shadow-md"
                            >
                                Registrar otra inscripción
                            </button>
                        </div>
                    )}

                    <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 space-y-8">
                        
                        <div className="border-b border-slate-200 pb-6">
                            <h2 className="text-2xl font-extrabold text-slate-950">
                                Formulario de Inscripción
                            </h2>
                            <p className="text-slate-600 text-sm mt-1 font-semibold">
                                Completa el formulario a continuación con tus datos de contacto (respetando la Ley de Protección de Datos Personales).
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            {/* Honeypot Trap - Invisible to real humans */}
                            <input
                                type="text"
                                name="b_website"
                                value={data.b_website}
                                onChange={(e) => setData('b_website', e.target.value)}
                                className="hidden opacity-0 pointer-events-none absolute -z-50"
                                tabIndex="-1"
                                autoComplete="off"
                            />

                            {/* Nombres & Apellidos */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                        Nombres *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={data.nombres}
                                        onChange={(e) => setData('nombres', e.target.value)}
                                        placeholder="Ej: Juan Carlos"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500 shadow-2xs font-medium"
                                    />
                                    {errors.nombres && <p className="text-red-600 text-xs mt-1 font-bold">{errors.nombres}</p>}
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                        Apellidos *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={data.apellidos}
                                        onChange={(e) => setData('apellidos', e.target.value)}
                                        placeholder="Ej: Pérez Soto"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500 shadow-2xs font-medium"
                                    />
                                    {errors.apellidos && <p className="text-red-600 text-xs mt-1 font-bold">{errors.apellidos}</p>}
                                </div>
                            </div>

                            {/* Email & Teléfono */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                        Correo Electrónico *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="ejemplo@correo.com"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500 shadow-2xs font-medium"
                                    />
                                    {errors.email && <p className="text-red-600 text-xs mt-1 font-bold">{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                        Teléfono de contacto
                                    </label>
                                    <input
                                        type="tel"
                                        value={data.telefono}
                                        onChange={(e) => setData('telefono', e.target.value)}
                                        placeholder="+56 9 1234 5678"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500 shadow-2xs font-medium"
                                    />
                                    {errors.telefono && <p className="text-red-600 text-xs mt-1 font-bold">{errors.telefono}</p>}
                                </div>
                            </div>

                            {/* Dirección */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                    Comuna / Dirección
                                </label>
                                <input
                                    type="text"
                                    value={data.direccion}
                                    onChange={(e) => setData('direccion', e.target.value)}
                                    placeholder="Ej: Av. Los Olivos 123"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500 shadow-2xs font-medium"
                                />
                                {errors.direccion && <p className="text-red-600 text-xs mt-1 font-bold">{errors.direccion}</p>}
                            </div>

                            {/* Área de interés */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                    Área de interés principal
                                </label>
                                <select
                                    value={data.interes_actividad}
                                    onChange={(e) => setData('interes_actividad', e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500 shadow-2xs font-medium"
                                >
                                    <option value="Entrega y traslado de catres clínicos">Entrega y traslado de catres clínicos</option>
                                    <option value="Mantenimiento técnico de sillas de ruedas">Mantenimiento técnico de sillas de ruedas</option>
                                    <option value="Apoyo en talleres para pacientes y cuidadores">Apoyo en talleres para pacientes y cuidadores</option>
                                    <option value="Logística y administración comunitaria">Logística y administración comunitaria</option>
                                    <option value="Difusión y eventos comunitarios">Difusión y eventos comunitarios</option>
                                </select>
                            </div>

                            {/* Motivación */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                    Motivación o comentarios
                                </label>
                                <textarea
                                    rows={4}
                                    value={data.motivacion}
                                    onChange={(e) => setData('motivacion', e.target.value)}
                                    placeholder="Cuéntanos brevemente por qué deseas colaborar con la Fundación Miguel Ángel Gamboa..."
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500 shadow-2xs font-medium"
                                />
                                {errors.motivacion && <p className="text-red-600 text-xs mt-1 font-bold">{errors.motivacion}</p>}
                            </div>

                            {/* DESAFÍO ANTI-SPAM (MATH CHALLENGE WITHOUT RECAPTCHA) */}
                            <div className="p-6 rounded-2xl bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        <label className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                                            Desafío de Seguridad Anti-Spam *
                                        </label>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={generateChallenge}
                                        className="text-xs text-rose-700 font-bold hover:underline flex items-center space-x-1"
                                        title="Generar nuevo ejercicio"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                        <span>Nuevo ejercicio</span>
                                    </button>
                                </div>

                                <p className="text-xs text-slate-700 font-medium">
                                    Por favor resuelve el siguiente ejercicio matemático simple para verificar que no eres un bot:
                                </p>

                                <div className="flex items-center space-x-3 pt-1">
                                    <div className="px-4 py-2 bg-white rounded-xl border border-rose-200 text-slate-950 font-black text-base shadow-2xs">
                                        {num1} + {num2} = ?
                                    </div>
                                    <input
                                        type="number"
                                        required
                                        value={data.desafio_respuesta}
                                        onChange={(e) => setData('desafio_respuesta', e.target.value)}
                                        placeholder="Tu respuesta"
                                        className="w-36 px-4 py-2 rounded-xl border border-slate-300 bg-white text-slate-950 text-sm font-bold focus:outline-hidden focus:ring-2 focus:ring-rose-500 shadow-2xs"
                                    />
                                </div>

                                {clientError && <p className="text-red-600 text-xs font-bold pt-1">{clientError}</p>}
                                {errors.desafio_respuesta && <p className="text-red-600 text-xs font-bold pt-1">{errors.desafio_respuesta}</p>}
                            </div>

                            {/* Privacy compliance badge */}
                            <p className="text-xs text-slate-500 font-medium text-center">
                                🔒 Tus datos están protegidos conforme a la Ley N° 19.628 / N° 21.719 de Protección de Datos Personales y serán utilizados exclusivamente para la coordinación del voluntariado.
                            </p>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full py-4 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-extrabold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-98 transition-all text-base disabled:opacity-50"
                                >
                                    {processing ? 'Verificando y Registrando...' : 'Enviar Inscripción de Voluntario'}
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
