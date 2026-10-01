import React, { useState } from 'react';

export default function CopyableField({ label, value }) {
    const [copiado, setCopiado] = useState(false);

    const copiar = async () => {
        try {
            await navigator.clipboard.writeText(value);
            setCopiado(true);
            setTimeout(() => setCopiado(false), 2000);
        } catch (e) {
            // Portapapeles no disponible (navegador antiguo o sin permiso); el valor sigue visible para copiar a mano.
        }
    };

    return (
        <div className="flex items-center justify-between gap-3 py-2 border-b border-slate-100 last:border-b-0">
            <div className="min-w-0">
                <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide">{label}</span>
                <span className="block text-sm font-bold text-slate-950 break-words">{value}</span>
            </div>
            <button
                type="button"
                onClick={copiar}
                className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all flex items-center space-x-1.5 ${
                    copiado
                        ? 'bg-emerald-50 border-emerald-200'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-rose-300 hover:text-rose-600'
                }`}
            >
                {copiado ? (
                    <>
                        <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-emerald-600">Copiado</span>
                    </>
                ) : (
                    <>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>Copiar</span>
                    </>
                )}
            </button>
        </div>
    );
}
