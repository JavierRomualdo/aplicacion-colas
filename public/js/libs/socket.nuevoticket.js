

// Comando para establecer la conexión

var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor')
});

socket.on('estadoActual', (data) => {
    label.text(data.actual);
});

$('button').on('click', function() {
    console.log('click');
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        console.log(siguienteTicket);
        label.text(siguienteTicket);
    });
});