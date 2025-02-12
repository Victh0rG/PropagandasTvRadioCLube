const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configura a pasta 'public' para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal que renderiza uma página HTML para reprodução automática
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
