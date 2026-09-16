import http from "node:http";

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res.end("List of users");
  }
  if (method === "POST" && url === "/users") {
    return res.end("Creating a new user");
  }
});

server.listen(3333, () => {
  console.log("Server is running on port 3333");
});
