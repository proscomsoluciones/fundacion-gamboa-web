<?php

namespace App\Filament\Resources;

use App\Filament\Resources\VoluntarioResource\Pages;
use App\Models\Voluntario;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class VoluntarioResource extends Resource
{
    protected static ?string $model = Voluntario::class;

    protected static ?string $navigationIcon = 'heroicon-o-user-group';

    protected static ?string $navigationGroup = 'Comunidad & Voluntariado';

    protected static ?string $modelLabel = 'Voluntario';

    protected static ?string $pluralModelLabel = 'Voluntarios Inscritos';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Card::make()->schema([
                    Forms\Components\TextInput::make('nombres')
                        ->required()
                        ->maxLength(255),

                    Forms\Components\TextInput::make('apellidos')
                        ->required()
                        ->maxLength(255),

                    Forms\Components\TextInput::make('rut')
                        ->label('RUT / DNI')
                        ->maxLength(50),

                    Forms\Components\TextInput::make('email')
                        ->email()
                        ->required()
                        ->maxLength(255),

                    Forms\Components\TextInput::make('telefono')
                        ->tel()
                        ->maxLength(50),

                    Forms\Components\TextInput::make('direccion')
                        ->maxLength(255),

                    Forms\Components\Select::make('estado')
                        ->options([
                            'pendiente' => 'Pendiente de Contacto',
                            'contactado' => 'Contactado',
                            'activo' => 'Voluntario Activo',
                            'inactivo' => 'Inactivo',
                        ])
                        ->required()
                        ->default('pendiente'),

                    Forms\Components\TextInput::make('interes_actividad')
                        ->label('Área de Interés')
                        ->columnSpanFull(),

                    Forms\Components\Textarea::make('motivacion')
                        ->label('Motivación / Experiencia')
                        ->rows(4)
                        ->columnSpanFull(),
                ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime('d/m/Y H:i')
                    ->label('Fecha Inscripción')
                    ->sortable(),

                Tables\Columns\TextColumn::make('nombres')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('apellidos')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('email')
                    ->searchable()
                    ->copyable(),

                Tables\Columns\TextColumn::make('telefono')
                    ->searchable(),

                Tables\Columns\SelectColumn::make('estado')
                    ->options([
                        'pendiente' => 'Pendiente',
                        'contactado' => 'Contactado',
                        'activo' => 'Activo',
                        'inactivo' => 'Inactivo',
                    ])
                    ->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                Tables\Filters\SelectFilter::make('estado')
                    ->options([
                        'pendiente' => 'Pendiente',
                        'contactado' => 'Contactado',
                        'activo' => 'Activo',
                        'inactivo' => 'Inactivo',
                    ]),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
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
            'index' => Pages\ListVoluntarios::route('/'),
            'create' => Pages\CreateVoluntario::route('/create'),
            'edit' => Pages\EditVoluntario::route('/{record}/edit'),
        ];
    }
}
