const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Node</title></head>");
  res.write("<body><h1>Shilpa</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(4000);
