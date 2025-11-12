#!/bin/bash
echo "Iniciando despliegue..."
if [ -d "build" ]; then
  echo "Desplegando Acme Ecommerce en entorno de producción..."
  echo "✅ Despliegue completado exitosamente."
else
  echo "❌ No se encontró el build. Ejecuta build_app.sh primero."
  exit 1
fi
