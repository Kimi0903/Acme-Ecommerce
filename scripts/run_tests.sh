#!/bin/bash
echo "Ejecutando pruebas..."
npm test
if [ $? -eq 0 ]; then
  echo "✅ Todas las pruebas pasaron correctamente."
else
  echo "❌ Pruebas fallidas. Deteniendo pipeline."
  exit 1
fi
