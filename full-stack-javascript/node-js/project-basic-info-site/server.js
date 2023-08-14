const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const about = fs.readFileSync("about.html", "utf-8");
const contact = fs.readFileSync("contact-me.html", "utf-8");
const error = fs.readFileSync("404.html", "utf-8");

const server = http.createServer((req, res) => {
  console.log("server started");
  res.setHeader("Content-Type", "text/html");
  switch (req.url) {
    case "/": {
      res.end(index);
      break;
    }
    case "/about.html": {
      res.end(about);
      break;
    }
    case "/contact-me.html": {
      res.end(contact);
      break;
    }
    default: {
      res.end(error);
    }
  }
});

server.listen(8080);
