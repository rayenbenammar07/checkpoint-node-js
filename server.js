const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1> Hello World!</h1>");
  }
});
server.listen(3000, (err) => {
  if (err) throw err;
  console.log("Server is up and running on port 3000");
});

