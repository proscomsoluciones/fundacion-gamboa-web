import React from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { usePage } from '@inertiajs/react';

export default function PublicLayout({ children }) {
    const { flash } = usePage().props;

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col selection:bg-rose-600 selection:text-white">
            
            {/* Top Navigation Bar */}
            <Navbar />

            {/* Flash Message Banner */}
            {flash?.success && (
                <div className="bg-rose-600 text-white px-4 py-3 shadow-md animate-fade-in">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <svg className="w-6 h-6 text-rose-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-semibold text-sm">{flash.success}</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Page Content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
