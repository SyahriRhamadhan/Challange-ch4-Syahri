//Server without framework
//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework
//https://stackoverflow.com/questions/16333790/node-js-quick-file-server-static-files-over-http
const http = require("http");
const { PORT = 8000 } = process.env;
const fs = require("fs");
const url = require("url");
const path = require("path");
// mime types
const mime = require("mime-types");

const PUBLIC_DIRECTORY = path.join(__dirname, "../public/");

const onRequest = (req, res) => {
  let parsedURL = url.parse(req.url, true);

  let path = parsedURL.path.replace(/^\/+|\/+$/g, "");

  switch (path) {
    case "":
      path = "index.html";
      break;
    case "cars":
      path = "cars.html";
      break;
  }

  console.log(`Requested path ${path} `);

  let file = PUBLIC_DIRECTORY + path;
  fs.readFile(file, function (err, content) {
    if (err) {
      console.log(`File Not Found ${file}`);
      res.writeHead(404);
      res.end(`Sorry, check with the site admin for error: ${err.code} ..\n`);
    } 
    else {
      // content response
      console.log(`Returning ${path}`);
      res.setHeader("X-Content-Type-Options", "nosniff");
      let type = mime.lookup(path);
      res.writeHead(200, { "Content-type": type });
      res.end(content);
    }
  });
};

http.createServer(onRequest).listen(PORT, () => {
  console.log(`server is run, go to http://localhost:${PORT}`);
});



