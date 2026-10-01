<?php

use App\Http\Controllers\Public\HomeController;
use App\Http\Controllers\Public\PaginaController;
use App\Http\Controllers\Public\NoticiaController;
use App\Http\Controllers\Public\AvisoController;
use App\Http\Controllers\Public\ActividadController;
use App\Http\Controllers\Public\VoluntarioController;
use App\Http\Controllers\Public\DonacionController;
use App\Http\Controllers\Public\TransparenciaController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Rutas Públicas de la Fundación
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/nosotros', [PaginaController::class, 'nosotros'])->name('nosotros');
Route::get('/mision-y-vision', [PaginaController::class, 'misionVision'])->name('mision-vision');
Route::get('/contacto', [PaginaController::class, 'contacto'])->name('contacto');

Route::get('/noticias', [NoticiaController::class, 'index'])->name('noticias.index');
Route::get('/noticias/{slug}', [NoticiaController::class, 'show'])->name('noticias.show');

Route::get('/avisos', [AvisoController::class, 'index'])->name('avisos.index');

Route::get('/calendario', [ActividadController::class, 'index'])->name('calendario.index');

Route::get('/donaciones', [DonacionController::class, 'index'])->name('donaciones.index');

Route::get('/transparencia', [TransparenciaController::class, 'index'])->name('transparencia.index');

Route::get('/voluntarios', [VoluntarioController::class, 'index'])->name('voluntarios.index');
Route::post('/voluntarios', [VoluntarioController::class, 'store'])
    ->name('voluntarios.store')
    ->middleware('throttle:5,1'); // Máximo 5 intentos por minuto por IP para evitar spam automatizado

// Rutas de Usuario Autenticado / Breeze
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
