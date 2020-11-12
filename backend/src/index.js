// importa el servidor desde app
const app = require('./app');

// define una variable y le pasa un puerto para nuesto servidor
app.set('PORT', 4000);

/**
 * Funcion principal main():
 * Nos permite usar async & await para evitar escribir callbacks,
 * Inicia el servidor escuchando en un puerto definido por el sistema,
 * en caso de no haber uno, le pasa el puerto en una variable.
 */
async function main() {
    await app.listen(process.env.Port || app.get('PORT'));
    console.log('server on port', app.get('PORT'));
}

// llama la funcion main
main();