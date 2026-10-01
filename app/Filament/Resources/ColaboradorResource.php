<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ColaboradorResource\Pages;
use App\Models\Colaborador;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ColaboradorResource extends Resource
{
    protected static ?string $model = Colaborador::class;

    protected static ?string $slug = 'colaboradores';

    protected static ?string $navigationIcon = 'heroicon-o-user-group';

    protected static ?string $navigationGroup = 'Gestión de Contenidos';

    protected static ?string $modelLabel = 'Voluntario / Colaborador';

    protected static ?string $pluralModelLabel = 'Voluntarios y Colaboradores';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Card::make()->schema([
                    Forms\Components\FileUpload::make('foto')
                        ->label('Fotografía (Subir foto desde el equipo)')
                        ->image()
                        ->avatar()
                        ->disk('public')
                        ->directory('colaboradores')
                        ->imageEditor()
                        ->imageEditorAspectRatios(['1:1'])
                        ->columnSpanFull(),

                    Forms\Components\TextInput::make('nombre')
                        ->label('Nombre Completo')
                        ->placeholder('Ej: Jocelyn Fernández')
                        ->required()
                        ->maxLength(255),

                    Forms\Components\TextInput::make('cargo')
                        ->label('Cargo / Rol')
                        ->placeholder('Ej: Referente de Sector')
                        ->maxLength(255),

                    Forms\Components\Select::make('sector')
                        ->label('Sector / Población / Zona')
                        ->options(function () {
                            $predefinidos = array_combine(Colaborador::SECTORES, Colaborador::SECTORES);
                            $existentes = Colaborador::query()
                                ->whereNotNull('sector')
                                ->pluck('sector', 'sector')
                                ->toArray();
                            return array_merge($predefinidos, $existentes);
                        })
                        ->searchable()
                        ->createOptionForm([
                            Forms\Components\TextInput::make('nuevo_sector')
                                ->label('Nombre del Nuevo Sector')
                                ->placeholder('Ej: Sector El Mirador / Población San José')
                                ->required(),
                        ])
                        ->createOptionUsing(function (array $data) {
                            return $data['nuevo_sector'];
                        })
                        ->required()
                        ->helperText('Selecciona un sector existente de la lista o haz clic en el botón "+" al lado del campo para crear un nuevo sector.'),

                    Forms\Components\TextInput::make('telefono_whatsapp')
                        ->label('Teléfono / WhatsApp')
                        ->tel()
                        ->placeholder('+56 9 6637 9509')
                        ->helperText('Formato recomendado: +56 9 XXXX XXXX')
                        ->maxLength(50),

                    Forms\Components\Textarea::make('descripcion')
                        ->label('Descripción u Observaciones (opcional)')
                        ->rows(2)
                        ->maxLength(200)
                        ->columnSpanFull(),

                    Forms\Components\TextInput::make('orden')
                        ->label('Orden de aparición')
                        ->numeric()
                        ->default(0)
                        ->helperText('Menor número aparece primero en el sitio web.'),

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
                    ->label('Cargo / Rol')
                    ->searchable()
                    ->placeholder('—')
                    ->wrap(),

                Tables\Columns\TextColumn::make('sector')
                    ->badge()
                    ->sortable(),

                Tables\Columns\TextColumn::make('telefono_whatsapp')
                    ->label('WhatsApp')
                    ->placeholder('—'),

                Tables\Columns\IconColumn::make('activo')
                    ->boolean()
                    ->label('Visible'),

            ])
            ->defaultSort('orden')
            ->filters([
                Tables\Filters\SelectFilter::make('sector')
                    ->label('Filtrar por Sector')
                    ->options(fn () => Colaborador::query()->whereNotNull('sector')->distinct()->pluck('sector', 'sector')->toArray()),

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
            'index' => Pages\ListColaboradors::route('/'),
            'create' => Pages\CreateColaborador::route('/create'),
            'edit' => Pages\EditColaborador::route('/{record}/edit'),
        ];
    }
}
