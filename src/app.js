const net = require('net');


const SERVER_HOST = 'server';
const SERVER_PORT = 8080;

console.log(`[Node.js] Let's try to connect to server  ${SERVER_HOST}:${SERVER_PORT}...`);

const client = net.createConnection({ host: SERVER_HOST, port: SERVER_PORT }, () => {
    console.log('[Node.js] Successfully connected!');


    client.write('HELLO FROM NODE\n');
});

client.on('data', (data) => {
    console.log('[Node.js] I got server response:', data.toString());
    client.end(); // Закрываем соединение
});

client.on('error', (err) => {
    console.error('[Node.js] Error', err.message);
});

client.on('end', () => {
    console.log('[Node.js] Closed');
});