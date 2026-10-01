<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CuentaBancariaResource\Pages;
use App\Models\CuentaBancaria;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class CuentaBancariaResource extends Resource
{
    protected static ?string $model = CuentaBancaria::class;

    protected static ?string $slug = 'cuentas-bancarias';

    protected static ?string $navigationIcon = 'heroicon-o-banknotes';

    protected static ?string $navigationGroup = 'Donaciones';

    protected static ?string $modelLabel = 'Cuenta Bancaria';

    protected static ?string $pluralModelLabel = 'Cuentas Bancarias';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Card::make()->schema([
                    Forms\Components\TextInput::make('banco')
                        ->required()
                        ->placeholder('Ej: Banco Estado')
                        ->maxLength(255),

                    Forms\Components\Select::make('tipo_cuenta')
                        ->required()
                        ->options([
                            'Cuenta Corriente' => 'Cuenta Corriente',
                            'Cuenta Vista' => 'Cuenta Vista',
                            'Cuenta RUT' => 'Cuenta RUT',
                            'Cuenta de Ahorro' => 'Cuenta de Ahorro',
                        ]),

                    Forms\Components\TextInput::make('numero_cuenta')
                        ->label('Número de cuenta')
                        ->required()
                        ->maxLength(255),

                    Forms\Components\TextInput::make('rut_titular')
                        ->label('RUT del titular')
                        ->placeholder('76.543.210-1')
                        ->required()
                        ->maxLength(255),

                    Forms\Components\TextInput::make('nombre_titular')
                        ->label('Nombre del titular')
                        ->placeholder('Fundación Miguel Ángel Gamboa')
                        ->required()
                        ->maxLength(255),

                    Forms\Components\TextInput::make('email_confirmacion')
                        ->label('Correo de contacto institucional (Opcional)')
                        ->email()
                        ->maxLength(255),

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
                Tables\Columns\TextColumn::make('banco')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('tipo_cuenta'),

                Tables\Columns\TextColumn::make('numero_cuenta')
                    ->label('N° Cuenta')
                    ->copyable()
                    ->copyMessage('Número copiado'),

                Tables\Columns\TextColumn::make('nombre_titular')
                    ->label('Titular'),

                Tables\Columns\IconColumn::make('activo')
                    ->boolean()
                    ->label('Visible'),

                Tables\Columns\TextColumn::make('orden')
                    ->sortable(),
            ])
            ->defaultSort('orden')
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
            'index' => Pages\ListCuentaBancarias::route('/'),
            'create' => Pages\CreateCuentaBancaria::route('/create'),
            'edit' => Pages\EditCuentaBancaria::route('/{record}/edit'),
        ];
    }
}
