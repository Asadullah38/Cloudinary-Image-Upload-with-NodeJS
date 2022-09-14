const express = require("express");
const { create } = require("./posts");
const app = express();
app.post("/", create);
app.use(express.json());
app.listen(process.env.PORT || 5000);
