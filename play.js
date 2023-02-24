const net = require("net");
const connect = require("./client.js");



console.log("Connecting ...");
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {  
  process.stdin.on('data', (key) => {
    if (key.ctrl && key.name == "C") {
      process.exit();
    }
  });  
};