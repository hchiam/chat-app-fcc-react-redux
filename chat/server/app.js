const WebSocket = require('ws');

const webSocketServer = new WebSocket.Server({ port: 8989 });

const users = [];

const broadcast =(data, webServer)=> {
  webSocketServer.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== webServer) {
      client.send(JSON.stringify(data));
    }
  });
};

// when client connects to this server
webSocketServer.on('connection', (ws) => {

  let index;

  ws.on('message', (message) => {

    const data = JSON.parse(message);

    switch (data.type) {

      case 'ADD_USER': { // aside: server can't read constants in client folders
        index = users.length - 1;
        // add to server-side list of users
        users.push({ name: data.name, id: index + 1 });
        // send
        ws.send(JSON.stringify({
          type: 'USERS_LIST',
          users,
        }));
        // also broadcast to all connected clients
        broadcast({
          type: 'USERS_LIST',
          users,
        }, ws);
        break;
      }

      case 'ADD_MESSAGE': {
        // broadcast to all connected clients
        broadcast({
          type: 'ADD_MESSAGE',
          message: data.message,
          author: data.author,
        }, ws);
        break;
      }

      default: {
        break;
      }
    }
  });

  // when client disconnects:
  ws.on('close', () => {
    // remove first user from users list
    users.splice(index, 1);
    // TODO: actually remove the correct client

    broadcast({
      type: 'USERS_LIST',
      users,
    }, ws);
  });
});
