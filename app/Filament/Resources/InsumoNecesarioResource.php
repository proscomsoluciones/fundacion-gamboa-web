<?php

namespace App\Filament\Resources;

use App\Filament\Resources\InsumoNecesarioResource\Pages;
use App\Models\InsumoNecesario;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class InsumoNecesarioResource extends Resource
{
    protected static ?string $model = InsumoNecesario::class;

    protected static ?string $slug = 'insumos-necesarios';

    protected static ?string $navigationIcon = 'heroicon-o-archive-box';

    protected static ?string $navigationGroup = 'Donaciones';

    protected static ?string $modelLabel = 'Insumo Necesario';

    protected static ?string $pluralModelLabel = 'Insumos Necesarios';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Card::make()->schema([
                    Forms\Components\TextInput::make('nombre')
                        ->required()
                        ->placeholder('Ej: Colchones antiescaras')
                        ->maxLength(255)
                        ->columnSpanFull(),

                    Forms\Components\TextInput::make('descripcion')
                        ->label('Detalle (opcional)')
                        ->placeholder('Ej: Nuevos o en buen estado, cualquier tamaño')
                        ->maxLength(255)
                        ->columnSpanFull(),

                    Forms\Components\Toggle::make('urgente')
                        ->label('Marcar como urgente')
                        ->default(false),

                    Forms\Components\Toggle::make('activo')
                        ->label('Visible en el sitio web')
                        ->default(true),

                    Forms\Components\TextInput::make('orden')
                        ->label('Orden de aparición')
                        ->numeric()
                        ->default(0),
                ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('nombre')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('descripcion')
                    ->placeholder('—')
                    ->limit(40),

                Tables\Columns\IconColumn::make('urgente')
                    ->boolean()
                    ->label('Urgente'),

                Tables\Columns\IconColumn::make('activo')
                    ->boolean()
                    ->label('Visible'),

                Tables\Columns\TextColumn::make('orden')
                    ->sortable(),
            ])
            ->defaultSort('orden')
            ->filters([
                Tables\Filters\TernaryFilter::make('urgente'),
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
            'index' => Pages\ListInsumoNecesarios::route('/'),
            'create' => Pages\CreateInsumoNecesario::route('/create'),
            'edit' => Pages\EditInsumoNecesario::route('/{record}/edit'),
        ];
    }
}
