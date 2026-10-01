<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="robots" content="index, follow">
        <meta name="author" content="Fundación Miguel Ángel Gamboa">
        <meta name="description" content="Fundación del Cáncer Miguel Ángel Gamboa — Apoyo integral a pacientes oncológicos y postrados en Catemu y Valle del Aconcagua. Préstamo gratuito de catres clínicos, sillas de ruedas, alimentos e insumos de salud.">
        <meta name="keywords" content="Fundación Miguel Ángel Gamboa, cáncer Catemu, ayudas técnicas Catemu, catres clínicos gratis, sillas de ruedas Aconcagua, pañales adulto Catemu, voluntariado salud">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="Fundación Miguel Ángel Gamboa">
        <meta property="og:title" content="Fundación Miguel Ángel Gamboa — Juntos Contra el Cáncer">
        <meta property="og:description" content="Apoyo integral y gratuito a pacientes con cáncer y familias dependientes en Catemu y Valle del Aconcagua.">
        <meta property="og:locale" content="es_CL">

        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Fundación Miguel Ángel Gamboa — Juntos Contra el Cáncer">
        <meta name="twitter:description" content="Apoyo integral y gratuito a pacientes con cáncer y familias dependientes en Catemu y Valle del Aconcagua.">

        <title inertia>{{ config('app.name', 'Fundación Miguel Ángel Gamboa') }}</title>

        <!-- Foundation Logo Favicon -->
        <link rel="icon" type="image/svg+xml" href="/favicon.svg">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600,700,800,900&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
