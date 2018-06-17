/* jshint esversion: 6 */

console.log("Starting server...");

var client;

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 2666 });

wss.on('connection', function connection(ws) {

  if (!client) {
    client = ws;
    clientInit(ws);
  }

  console.log("Connection");
});

function clientInit(client) {
  client.on('message', function incoming(message) {



  });
}

const stdin = process.openStdin();

stdin.addListener("data", function(d) {
  let input = d.toString().trim();

  if (client && input) {
    let data = {
      action: input
    };
    client.send(JSON.stringify(data));
  }

});
