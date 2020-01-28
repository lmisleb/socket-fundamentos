var socket = io();

// Escuchar on escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información emit emitir
socket.emit('enviarMensaje', {
    usuario: 'Lenin',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensajeServidor) {
    console.log('Info del servidor: ', mensajeServidor);
});