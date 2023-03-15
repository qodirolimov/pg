const { Router } = require("express");
const { GET } = require("../controller/course");

const course = Router();

course.get("/course", GET);
course.get("/course/:id", GET);
module.exports = { course };