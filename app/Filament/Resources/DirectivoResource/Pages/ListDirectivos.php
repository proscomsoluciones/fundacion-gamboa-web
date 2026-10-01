<?php

namespace App\Filament\Resources\DirectivoResource\Pages;

use App\Filament\Resources\DirectivoResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListDirectivos extends ListRecords
{
    protected static string $resource = DirectivoResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
