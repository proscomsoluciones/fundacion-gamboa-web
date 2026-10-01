<?php

namespace App\Filament\Resources\DocumentoTransparenciaResource\Pages;

use App\Filament\Resources\DocumentoTransparenciaResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditDocumentoTransparencia extends EditRecord
{
    protected static string $resource = DocumentoTransparenciaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
