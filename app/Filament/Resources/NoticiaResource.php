<?php

namespace App\Filament\Resources;

use App\Filament\Resources\NoticiaResource\Pages;
use App\Models\Noticia;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Str;

class NoticiaResource extends Resource
{
    protected static ?string $model = Noticia::class;

    protected static ?string $navigationIcon = 'heroicon-o-newspaper';

    protected static ?string $navigationGroup = 'Gestión de Contenidos';

    protected static ?string $modelLabel = 'Noticia';

    protected static ?string $pluralModelLabel = 'Noticias';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Card::make()->schema([
                    Forms\Components\TextInput::make('titulo')
                        ->label('Título de la Noticia')
                        ->placeholder('Ej: Fundación adjudica fondo para pacientes de Catemu')
                        ->required()
                        ->maxLength(255)
                        ->live(onBlur: true)
                        ->afterStateUpdated(fn (string $operation, $state, Forms\Set $set) => 
                            $set('slug', Str::slug($state))
                        ),

                    Forms\Components\TextInput::make('slug')
                        ->label('Enlace URL (Slug autogenerado)')
                        ->helperText('Se genera automáticamente a partir del título y no se puede modificar manualmente.')
                        ->readOnly()
                        ->dehydrated()
                        ->required()
                        ->maxLength(255)
                        ->unique(Noticia::class, 'slug', ignoreRecord: true),

                    Forms\Components\Textarea::make('resumen')
                        ->label('Resumen Breve (Bajada de Noticia)')
                        ->helperText('Resumen corto que se muestra en las tarjetas del inicio. Recomendado: entre 120 y 160 caracteres (máximo 180).')
                        ->rows(3)
                        ->maxLength(180)
                        ->columnSpanFull(),

                    Forms\Components\RichEditor::make('contenido')
                        ->required()
                        ->columnSpanFull(),

                    Forms\Components\FileUpload::make('imagen')
                        ->label('Imagen Principal de la Noticia')
                        ->helperText('Puedes subir fotos tomadas directamente desde el celular o cámara (hasta 10MB). El sistema ajusta y recorta la imagen automáticamente para que se vea perfecta en la web.')
                        ->image()
                        ->directory('noticias')
                        ->imageEditor()
                        ->imageEditorAspectRatios(['16:9', '4:3', '1:1'])
                        ->maxSize(10240)
                        ->columnSpanFull(),

                    Forms\Components\DateTimePicker::make('fecha_publicacion')
                        ->default(now()),

                    Forms\Components\Toggle::make('esta_publicado')
                        ->label('Publicado')
                        ->default(true),
                ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('imagen'),
                Tables\Columns\TextColumn::make('titulo')
                    ->searchable()
                    ->sortable()
                    ->limit(40),

                Tables\Columns\IconColumn::make('esta_publicado')
                    ->boolean()
                    ->label('Publicado'),

                Tables\Columns\TextColumn::make('fecha_publicacion')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime('d/m/Y')
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\TernaryFilter::make('esta_publicado')
                    ->label('Estado de publicación'),
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
            'index' => Pages\ListNoticias::route('/'),
            'create' => Pages\CreateNoticia::route('/create'),
            'edit' => Pages\EditNoticia::route('/{record}/edit'),
        ];
    }
}
