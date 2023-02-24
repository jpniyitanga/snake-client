const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541 // PORT number here,
  });

  conn.on("connect", () => {
  console.log("Successfully connected to game server");
  conn.write("Name: JPN");  
  // conn.write("Move: up");
  // conn.write("Move: down");
  // conn.write("Move: left");
  // conn.write("Move: right");
});

  conn.on("data", (data) => {
    console.log(data);
  });



    // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;