<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DirectivoResource\Pages;
use App\Models\Directivo;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class DirectivoResource extends Resource
{
    protected static ?string $model = Directivo::class;

    protected static ?string $slug = 'directivos';

    protected static ?string $navigationIcon = 'heroicon-o-academic-cap';

    protected static ?string $navigationGroup = 'Gestión de Contenidos';

    protected static ?string $modelLabel = 'Miembro Directivo';

    protected static ?string $pluralModelLabel = 'Equipo Directivo';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Card::make()->schema([
                    Forms\Components\FileUpload::make('foto')
                        ->label('Fotografía Oficial')
                        ->helperText('Puedes subir fotos tomadas directamente desde el celular (hasta 10MB). El editor las recortará y adaptará automáticamente.')
                        ->image()
                        ->disk('public')
                        ->directory('directivos')
                        ->imageEditor()
                        ->imageEditorAspectRatios(['4:3', '1:1', '16:9'])
                        ->maxSize(10240)
                        ->columnSpanFull(),

                    Forms\Components\TextInput::make('nombre')
                        ->label('Nombre Completo')
                        ->placeholder('Ej: Dr. Miguel Ángel Gamboa')
                        ->required()
                        ->maxLength(255),

                    Forms\Components\TextInput::make('cargo')
                        ->label('Cargo en la Directiva')
                        ->placeholder('Ej: Presidente, Vicepresidente, Tesorera, Secretario, Director')
                        ->required()
                        ->maxLength(255),

                    Forms\Components\TextInput::make('profesion')
                        ->label('Profesión / Título / Grado (opcional)')
                        ->placeholder('Ej: Médico Fisiatra / Contador Auditor / Trabajadora Social')
                        ->maxLength(255),

                    Forms\Components\TextInput::make('telefono_whatsapp')
                        ->label('Teléfono / WhatsApp de contacto')
                        ->tel()
                        ->placeholder('+56 9 6637 9509')
                        ->maxLength(50),

                    Forms\Components\TextInput::make('email')
                        ->label('Correo Electrónico')
                        ->email()
                        ->placeholder('contacto@fundaciongamboa.org')
                        ->maxLength(255),

                    Forms\Components\Textarea::make('descripcion')
                        ->label('Resumen / Biografía breve / Mensaje')
                        ->rows(3)
                        ->maxLength(500)
                        ->columnSpanFull(),

                    Forms\Components\TextInput::make('orden')
                        ->label('Orden de Prioridad')
                        ->numeric()
                        ->default(0)
                        ->helperText('Menor número aparece primero (1: Presidente, 2: Vicepresidente, etc.)'),

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
                Tables\Columns\ImageColumn::make('foto')
                    ->label('Foto')
                    ->disk('public')
                    ->circular(),

                Tables\Columns\TextColumn::make('nombre')
                    ->label('Nombre Completo')
                    ->searchable()
                    ->sortable()
                    ->wrap(),

                Tables\Columns\TextColumn::make('cargo')
                    ->label('Cargo')
                    ->badge()
                    ->color('danger')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('profesion')
                    ->label('Profesión / Título')
                    ->placeholder('—')
                    ->searchable(),

                Tables\Columns\TextColumn::make('telefono_whatsapp')
                    ->label('WhatsApp')
                    ->placeholder('—'),

                Tables\Columns\IconColumn::make('activo')
                    ->boolean()
                    ->label('Visible'),

                Tables\Columns\TextColumn::make('orden')
                    ->sortable(),
            ])
            ->defaultSort('orden')
            ->filters([
                Tables\Filters\TernaryFilter::make('activo')
                    ->label('Visibles en el sitio'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListDirectivos::route('/'),
            'create' => Pages\CreateDirectivo::route('/create'),
            'edit' => Pages\EditDirectivo::route('/{record}/edit'),
        ];
    }
}
