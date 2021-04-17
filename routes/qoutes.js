const express = require("express");
const router = express.Router();
const quoteModel = require("../models/quotesData");

router.post("/sendData", (req, res) => {
  const quoteData = new quoteModel(req.body);
  quoteData.save((err) => {
    if (err) {
      console.log("data loading to database failed for", err);
    } else {
      console.log("successfully data loaded");
      res.send("data sent successfully");
    }
  });
});
router.get("/getdata", (req, res) => {
  quoteModel.find({}, { _id: 0, __v: 0 }, (err, data) => {
    if (err) {
      console.log("There is  an :", err);
    } else {
      console.log("This is student data from from database:", data);

      res.send({ result: data });
    }
  });
});

module.exports = router;
