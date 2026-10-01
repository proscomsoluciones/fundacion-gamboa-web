<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AvisoResource\Pages;
use App\Models\Aviso;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class AvisoResource extends Resource
{
    protected static ?string $model = Aviso::class;

    protected static ?string $navigationIcon = 'heroicon-o-megaphone';

    protected static ?string $navigationGroup = 'Gestión de Contenidos';

    protected static ?string $modelLabel = 'Aviso';

    protected static ?string $pluralModelLabel = 'Avisos';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Card::make()->schema([
                    Forms\Components\TextInput::make('titulo')
                        ->required()
                        ->maxLength(255)
                        ->columnSpanFull(),

                    Forms\Components\Textarea::make('contenido')
                        ->required()
                        ->rows(4)
                        ->columnSpanFull(),

                    Forms\Components\Toggle::make('es_destacado')
                        ->label('Destacar aviso (Badge especial en Home)')
                        ->default(false),

                    Forms\Components\Toggle::make('es_activo')
                        ->label('Activo')
                        ->default(true),

                    Forms\Components\DateTimePicker::make('fecha_publicacion')
                        ->label('Fecha de publicación (Programada)')
                        ->default(now()),

                    Forms\Components\DateTimePicker::make('fecha_expiracion')
                        ->label('Fecha de expiración (Opcional)'),
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

                Tables\Columns\IconColumn::make('es_destacado')
                    ->boolean()
                    ->label('Destacado'),

                Tables\Columns\IconColumn::make('es_activo')
                    ->boolean()
                    ->label('Activo'),

                Tables\Columns\TextColumn::make('fecha_publicacion')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),

                Tables\Columns\TextColumn::make('fecha_expiracion')
                    ->dateTime('d/m/Y H:i')
                    ->placeholder('Sin expiración'),
            ])
            ->filters([
                Tables\Filters\TernaryFilter::make('es_destacado')
                    ->label('Avisos destacados'),

                Tables\Filters\TernaryFilter::make('es_activo')
                    ->label('Avisos activos'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ]);
            
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAvisos::route('/'),
            'create' => Pages\CreateAviso::route('/create'),
            'edit' => Pages\EditAviso::route('/{record}/edit'),
        ];
    }
}
