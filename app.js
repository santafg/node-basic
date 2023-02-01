const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("App v1 is running");
});

const port = process.env.PORT || 4000;

const start = () => {
  try {
    app.listen(port, () =>
      console.log(`App running at http://localhost:${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
