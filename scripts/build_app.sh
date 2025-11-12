#!/bin/bash
echo "Generando build de la aplicación..."
mkdir -p build
cp -r src/* build/
echo "✅ Build generado en la carpeta /build"
