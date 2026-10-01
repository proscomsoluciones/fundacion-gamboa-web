<?php

namespace App\Filament\Resources\InsumoNecesarioResource\Pages;

use App\Filament\Resources\InsumoNecesarioResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListInsumoNecesarios extends ListRecords
{
    protected static string $resource = InsumoNecesarioResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
