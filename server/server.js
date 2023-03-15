const express = require("express");
const dotenv = require("dotenv").config();
const { course } = require("../router/course.routes");
const { students } = require("../router/students.routes");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(course);
app.use(students);


app.listen(PORT, console.log("server on ..." + PORT));

