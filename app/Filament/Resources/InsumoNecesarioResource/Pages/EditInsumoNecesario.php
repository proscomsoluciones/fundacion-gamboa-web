<?php

namespace App\Filament\Resources\InsumoNecesarioResource\Pages;

use App\Filament\Resources\InsumoNecesarioResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditInsumoNecesario extends EditRecord
{
    protected static string $resource = InsumoNecesarioResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
