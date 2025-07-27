const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hallo aus deinem Container! 🚀");
});
server.listen(3000, () => {
  console.log("Server läuft auf Port 3000");
});
