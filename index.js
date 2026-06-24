const http = require('http');

const port = 3000;

const server = http.createServer((req, res) =>{

	// configurar cabecera para para responder con json
	res.setHeader('Content-type', 'application/json');

	// Endpoint GET: /api/saludo
	if(req.method === 'GET' && req.url === '/api/saludo'){
		res.writeHead(200);
		res.end(JSON.stringify({ mensaje: 'Hola desde Node JS!' }));
	}else if(req.method === 'POST' && req.url === '/api/data'){
		// Endpoint POST: /api/data
		let body = '';
		// Escuchar los fragmentos de datos
		req.on('data', chunk => {
			body += chunk.toString();
		});

		// Recibidos todos los datos
		req.on('end',() => {

			try{
			
				const dataParsed = body ? JSON.parsed(body) : {};
				res.writeHead(200);
				res.end(JSON.stringify({ received: true, datos: dataParsed }));

			} catch (error){
				res.writeHead(400);
				res.end(JSON.stringify({ error: "JSON invalid" }));
			}
		});
	}else{
		res.writeHead(404);
		res.end(JSON.stringify( { error: "RUTA NO ENCONTRADA" } ));
	}
} );

server.listen(port, () => {
	console.log(`Servidor Nativo Corriendo en http://127.0.0.1:${port}`);
});
