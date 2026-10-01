<?php

namespace App\Filament\Resources\DocumentoTransparenciaResource\Pages;

use App\Filament\Resources\DocumentoTransparenciaResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListDocumentoTransparencias extends ListRecords
{
    protected static string $resource = DocumentoTransparenciaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
