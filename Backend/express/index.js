const express = require("express");
// const open = require("open");

const app = express();

const port = 3000;
app.listen(port, () => {
  console.log("server is listening", port);
});

// root ## http://localhost:3000/
app.get("/", (req, res) => {
  res.send({
    name: "vedant",
    email: "vedant@gmail.com",
    description: "learning import vs require package ",
    main: "script.js",
  });
});

// query String   ## localhost:3000/search?q=search_query

app.get("/search", (req, res) => {
  let { q } = req.query;

  if (q) {
    if (q === "cars") {
      const cars = ["BMW", "Audi", "Mercedes", "Toyota", "Honda"];
      const carList = cars.map((car) => `<li>${car}</li>`).join("");
      res.send(
        `<h1>welcome to the page of @${q}</h1><h2>Cars</h2><h3><ul>${carList}</ul></h3> `
      );
    } else {
      res.send(`<h1>welcome to the page of @${q}</h1>`);
    }
  }
  res.status(404).json({ error: "Route not found" });
});

// Path Param ## http://localhost:3000/vedant/123

app.get("/:user/:id", (req, res) => {
  let { user, id } = req.params;
  console.log(req.params, "  user->" + user, "&", "id->" + id);
  res.send(`<h1>welcome to the page of @${user}</h1>`);
});

// // 404 Not Found Handler
// app.use((req, res) => {
//   res.status(404).json({ error: "Route not found" });
// });
