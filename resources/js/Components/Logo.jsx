import React from 'react';

export default function Logo({ className = "h-20 sm:h-24 xl:h-28 w-auto" }) {
    return (
        <div className="flex items-center shrink-0 group">
            <img
                src="/img/logo/logo-fundacion.svg"
                alt="Fundación Miguel Ángel Gamboa — Juntos contra el cáncer"
                className={`w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${className}`}
            />
        </div>
    );
}
