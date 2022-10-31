const express = require("express");
const epress =  require("express");

const app = express();

app.get("/", (request, response) => {
  return response.send("Hello world!");
});

app.listen("3000");
