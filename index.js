const express = require("express");
const app = express();
const port = 3000;

// import route
const item = require("./routers/item");
app.use("/api", item);

// import router

const birds = require("./routers/birds");
app.use("/filler", birds);
// app.get("/", (req, res) => {
//   res.send("Hello Jee !");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
