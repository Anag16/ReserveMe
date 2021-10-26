const PORT = process.env.PORT || 8080;
const ENV = require("./environment");
const bodyParser = require('body-parser')

const app = require("./application")(ENV);
const server = require("http").Server(app);

const WebSocket = require("ws");
const wss = new WebSocket.Server({ server });
const cors = require('cors');

app.use(cors());

wss.on("connection", socket => {
  socket.onmessage = event => {
    console.log(`Message Received: ${event.data}`);

    if (event.data === "ping") {
      socket.send(JSON.stringify("pong"));
    }
  };
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});