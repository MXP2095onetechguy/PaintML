const fs = require('fs'), http = require('http'), path = require("path");

/* change port if needed */
const port = 8080;

console.log("booting up server at " + port + "!");

/* simple server, needed to have complete functionality of the web app */
const server = http.createServer(function (req, res) {
    fs.readFile(path.join(__dirname, "PaintML.html"), function (err,data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
});

server.listen(port, function(err) {
    if(err) throw err;
    console.log("server ready at " + port + "!");
});