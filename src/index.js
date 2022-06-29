const express = require("express");
const PORT = 3000;
const routes = express.Router();

const body_parser = require("body-parser");

const server = express();

routes.get("/api", (req, res) => {
  return res.status(200).json({ Message: "Hello" });
});

routes.post("/api", (req, res) => {
  let { temperature, flow, Current } = req.body;

  return res.status(201).json(req.body);
});

server.use(body_parser.json());
server.use(routes);

server.listen(PORT, Listen());
function Listen() {
  return console.log("Hello");
}
