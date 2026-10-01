<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreVoluntarioRequest;
use App\Models\Voluntario;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class VoluntarioController extends Controller
{
    public function index(): Response
    {
        $colaboradores = \App\Models\Colaborador::activos()
            ->orderBy('sector')
            ->orderBy('orden')
            ->get(['id', 'nombre', 'cargo', 'sector', 'foto', 'descripcion', 'telefono_whatsapp']);

        return Inertia::render('Voluntarios/Index', [
            'colaboradores' => $colaboradores,
        ]);
    }

    public function store(StoreVoluntarioRequest $request): RedirectResponse
    {
        Voluntario::create($request->validated());

        return redirect()->back()->with('success', '¡Gracias por inscribirte! Tu solicitud ha sido registrada correctamente. Nuestro equipo se pondrá en contacto contigo pronto.');
    }
}
