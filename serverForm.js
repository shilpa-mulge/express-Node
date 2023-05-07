const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    fs.readFile("./message.txt", (err, data) => {
      const content = data.toString();
      res.write("<html>");
      res.write("<head><title>my node</title></head>");
      res.write(`<body>${content}</body>`);
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>'
      );
      res.write("</html>");
      return res.end();
    });
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = "302";
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  } else {
    res.write("<html>");
    res.write("<head><title>my node</title></head>");
    res.write("<body><h1>hello</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(4000);
