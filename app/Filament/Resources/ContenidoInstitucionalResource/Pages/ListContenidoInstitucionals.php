<?php

namespace App\Filament\Resources\ContenidoInstitucionalResource\Pages;

use App\Filament\Resources\ContenidoInstitucionalResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListContenidoInstitucionals extends ListRecords
{
    protected static string $resource = ContenidoInstitucionalResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
