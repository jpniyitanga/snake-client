let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = function(key) {
  
  // Ctrl-C to exit
  if (key === '\u0003') {
    process.exit();
  }

  
  // Letter 'q' sends a Hi message
  if (key === "w") {
    connection.write("Move: up");
  }
    
  if (key === "a") {
    connection.write("Move: left");
  }

  if (key === "s") {
    connection.write("Move: down");
  }

  if (key === "d") {
    connection.write("Move: right");
  }

  if (key === "q") {
    connection.write("Say: Hi");
  }

};



module.exports = setupInput;
