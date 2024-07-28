const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyparser = require("body-parser");

const { dbConnect } = require("./database/connection.js");
const studentRoute = require("./routes/student.js");
const mentorRoute = require("./routes/mentor.js");
const assignmentortostudent = require("./routes/assignmentortostudent.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send("Working fine...");
});
app.use("/student", studentRoute);
app.use("/mentor", mentorRoute);
app.use("/assignmentor", assignmentortostudent);

app.listen(process.env.PORT || 3000, "0.0.0.0", async (err) => {
  await dbConnect();
  console.log("Started server ");
  if (err) {
    console.log(err, "error in starting server");
  }
});
