import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";

const app = express();

const __dirname = path.resolve(path.dirname(""));

app.get("/listStocks", cors(), function (req, res) {
  fs.readFile(__dirname + "/" + "stocks.json", "utf8", function (err, data) {
    console.log(data);
    res.end(data);
  });
});

const PORT = 8081;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
