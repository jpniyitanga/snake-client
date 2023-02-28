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
  
  const moves = {
    w: 'Move: up',
    a: 'Move: left',
    s: 'Move: down',
    d: 'Move: right'
  };


  if ('w' === key || 'a' === key || 's' === key || 'd' === key) {
    connection.write(moves[key]);
  };



  
  if (key === "\u0003") {
    process.exit();
  }

};



module.exports = setupInput;
