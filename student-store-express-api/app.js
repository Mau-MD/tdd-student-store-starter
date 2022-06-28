// YOUR CODE HERE
const express = require("express");
const app = express();
const store = require("./routes/store");
const { NotFoundError } = require("./utils/errors");
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("tiny"));
app.use("/store", store);

app.get("/", (req, res) => {
  res.status(200).send({
    ping: "pong",
  });
});

app.use((req, res, next) => {
  next(new NotFoundError());
});

app.use((error, req, res, next) => {
  let { message, status } = error;
  if (!status) status = 500;
  if (!message) message = "Something wen't wrong in the application";

  res.status(status).send({
    status,
    message,
  });
});

module.exports = app;
