const { Router } = require("express");
const { GET } = require("../controller/students");

const students = Router();

students.get("/students", GET);
students.get("/students/:id", GET);
module.exports = { students };