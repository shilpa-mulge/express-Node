const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>my node</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message") {
    fs.writeFileSync("message.txt", "dummy");
    res.statusCode = "302";
    res.setHeader("location", "/");
    return res.end();
  }
  res.write("<html>");
  res.write("<head><title>my node</title></head>");
  res.write("<body><h1>hello</h1></body>");
  res.write("</html>");
  return res.end();
});

server.listen(4000);
