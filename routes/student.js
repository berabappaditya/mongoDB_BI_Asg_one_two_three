const express = require("express");
const router = express.Router();
const url = require("url");
const studentModel = require("../models/studentData");

router.post("/sendData", (req, res) => {
  const studentsData = new studentModel(req.body);
  studentsData.save((err) => {
    if (err) {
      console.log("data loading to database failed for", err);
    } else {
      console.log("successfully data loaded");
      res.send({ result: "successfull" });
    }
  });
});
router.get("/getData", (req, res) => {
  const path = req.url;
  console.log(path);
  const queryParamObject = url.parse(path, true).query;
  console.log("this is name", queryParamObject.name);
  studentModel.findOne(
    { name: queryParamObject.name },
    { _id: 0, __v: 0 },
    (err, data) => {
      if (err) {
        console.log("Error Happend is!!!", err);
      } else {
        res.send(data);
      }
    }
  );
});
module.exports = router;
