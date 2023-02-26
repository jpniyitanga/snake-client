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
  //  console.log(key);
  // Ctrl-C to exit
  if (key === '\u0003') {
    process.exit();
  }

  // Using arrow keys to move the snake
  // Letter 'q' sends a Hi message
  if (key === "\u001b[A") {
    connection.write("Move: up");
  }
    
  if (key === "\u001b[D") {
    connection.write("Move: left");
  }

  if (key === "\u001b[B") {
    connection.write("Move: down");
  }

  if (key === "\u001b[C") {
    connection.write("Move: right");
  }

  if (key === "q") {
    connection.write("Say: Hi");
  }

};



module.exports = setupInput;
