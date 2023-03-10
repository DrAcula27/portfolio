const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");

const app = express();

// allow cross origin access
app.use(
  cors({
    origin: "*",
  })
);

// logs the different requests to the server
app.use(logger("dev"));

// parse stringified objects (JSON)
app.use(express.json());

// serve build folder
app.use(express.static(path.join(__dirname, "build")));

// ROUTES

// catch-all route, must be last in route list
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// tell server where to listen. Must not be 3000 as React listens there.
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is Listening on port ${PORT}`);
});
