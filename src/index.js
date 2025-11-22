import express from 'express';
import client from 'prom-client';

const app = express();
const collectDefaultMetrics = client.collectDefaultMetrics;

// Recolectar métricas cada 5s
collectDefaultMetrics({ timeout: 5000 });

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.get('/', (req, res) => {
  res.send('Acme E-commerce Server Running');
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
