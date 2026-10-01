<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ContenidoInstitucionalResource\Pages;
use App\Models\ContenidoInstitucional;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ContenidoInstitucionalResource extends Resource
{
    protected static ?string $model = ContenidoInstitucional::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    protected static ?string $navigationGroup = 'Gestión de Contenidos';

    protected static ?string $modelLabel = 'Sección Institucional';

    protected static ?string $pluralModelLabel = 'Páginas Institucionales';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Card::make()->schema([
                    Forms\Components\TextInput::make('clave')
                        ->required()
                        ->disabledOn('edit')
                        ->maxLength(100)
                        ->helperText('Identificador interno de la sección (ej: nosotros_historia, mision_texto, vision_texto)'),

                    Forms\Components\TextInput::make('titulo')
                        ->required()
                        ->maxLength(255),

                    Forms\Components\RichEditor::make('contenido')
                        ->required()
                        ->columnSpanFull(),

                    Forms\Components\FileUpload::make('imagen')
                        ->image()
                        ->directory('institucional')
                        ->columnSpanFull(),
                ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('clave')
                    ->badge()
                    ->color('info')
                    ->searchable(),

                Tables\Columns\TextColumn::make('titulo')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime('d/m/Y H:i')
                    ->label('Última Actualización'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListContenidoInstitucionals::route('/'),
            'create' => Pages\CreateContenidoInstitucional::route('/create'),
            'edit' => Pages\EditContenidoInstitucional::route('/{record}/edit'),
        ];
    }
}
