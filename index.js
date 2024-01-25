const express = require("express");
const app = express();
const routes = require("./route");
const cors = require("cors");
// const { data } = require("./data");

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/main", routes);
app.get("/", (req, res) => {
  res.send("Server is Running ");
});
app.listen(8000, () => {
  try {
    console.log(`Server is live on port no.  `);
  } catch (err) {
    console.log(`Server is not working due to error ${err} on `);
  }
});
