// ye file saare item specifice rout ko store kregi

const express = require("express");
const router = express.Router();

// middleware that is specific to this router

// const timeLog = (req, res, next) => {
//   console.log("Time:", Date.now());
//   next();
// };

// router.use(timeLog);

// // define the home page route
// router.get("/", (req, res) => {
//   res.send("Birds home page");
// });
// // define the about route
// Requests ki kahani

router.get("/", (req, res) => {
  res.send("Got a Get Request");
  // res.sendFile("../dummy.html", { root: __dirname });
});

router.post("/items", (req, res) => {
  // res.send("Got a Post Request");
  res.json({ x: 1, y: 2, z: 3 });
});

router.put("/items/:id", (req, res) => {
  res.send("Got a put request");
});

router.delete("/items/:id", (req, res) => {
  res.send("Got a Delete request");
});

module.exports = router;
