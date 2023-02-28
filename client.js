const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    // host: 'localhost',
    // port: 50541
    host: IP,
    port: PORT
  });

  conn.on("connect", () => {
    conn.write("Name: JPN"); 
  });

  conn.on("data", (data) => {
    console.log(data);
  });



  // Interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;