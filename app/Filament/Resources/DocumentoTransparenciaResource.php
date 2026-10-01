<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DocumentoTransparenciaResource\Pages;
use App\Models\DocumentoTransparencia;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class DocumentoTransparenciaResource extends Resource
{
    protected static ?string $model = DocumentoTransparencia::class;

    protected static ?string $slug = 'transparencia';

    protected static ?string $navigationIcon = 'heroicon-o-document-check';

    protected static ?string $navigationGroup = 'Donaciones';

    protected static ?string $navigationLabel = 'Transparencia';

    protected static ?string $modelLabel = 'Documento';

    protected static ?string $pluralModelLabel = 'Documentos de Transparencia';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Card::make()->schema([
                    Forms\Components\TextInput::make('titulo')
                        ->required()
                        ->placeholder('Ej: Estados Financieros 2025')
                        ->maxLength(255)
                        ->columnSpanFull(),

                    Forms\Components\TextInput::make('descripcion')
                        ->label('Descripción breve (opcional)')
                        ->maxLength(255)
                        ->columnSpanFull(),

                    Forms\Components\Select::make('categoria')
                        ->options(array_combine(DocumentoTransparencia::CATEGORIAS, DocumentoTransparencia::CATEGORIAS))
                        ->required()
                        ->searchable(),

                    Forms\Components\TextInput::make('anio')
                        ->label('Año')
                        ->numeric()
                        ->minValue(2000)
                        ->maxValue(2100)
                        ->placeholder(now()->year),

                    Forms\Components\FileUpload::make('archivo')
                        ->label('Archivo (PDF, Word o Excel)')
                        ->required()
                        ->disk('public')
                        ->directory('transparencia')
                        ->acceptedFileTypes([
                            'application/pdf',
                            'application/msword',
                            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                            'application/vnd.ms-excel',
                            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        ])
                        ->maxSize(10240)
                        ->downloadable()
                        ->openable()
                        ->columnSpanFull(),

                    Forms\Components\TextInput::make('orden')
                        ->label('Orden de aparición')
                        ->numeric()
                        ->default(0),

                    Forms\Components\Toggle::make('activo')
                        ->label('Visible en el sitio web')
                        ->default(true),
                ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('titulo')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('categoria')
                    ->badge()
                    ->sortable(),

                Tables\Columns\TextColumn::make('anio')
                    ->label('Año')
                    ->sortable()
                    ->placeholder('—'),

                Tables\Columns\TextColumn::make('extension')
                    ->label('Formato'),

                Tables\Columns\IconColumn::make('activo')
                    ->boolean()
                    ->label('Visible'),

                Tables\Columns\TextColumn::make('orden')
                    ->sortable(),
            ])
            ->defaultSort('orden')
            ->filters([
                Tables\Filters\SelectFilter::make('categoria')
                    ->options(array_combine(DocumentoTransparencia::CATEGORIAS, DocumentoTransparencia::CATEGORIAS)),

                Tables\Filters\TernaryFilter::make('activo')
                    ->label('Visibles en el sitio'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListDocumentoTransparencias::route('/'),
            'create' => Pages\CreateDocumentoTransparencia::route('/create'),
            'edit' => Pages\EditDocumentoTransparencia::route('/{record}/edit'),
        ];
    }
}
