import { green } from 'chalk';
import { createServer } from 'http';

const host = 'localhost';
const port = 8000;

const respuesta = {
    nombre: 'Santiago Ortiz',
    mensaje: 'Este es el projecto para crear un servidor. Probar funcionalidad y respuesta :P'
  };


const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify(respuesta));
  });

server.listen(port, host, () => {
    const serverUrl = `http://${host}:${port}/`;
    const UrlVerde = green(serverUrl);
  
    console.log(`Servidor funcionando en ${UrlVerde}`);
});