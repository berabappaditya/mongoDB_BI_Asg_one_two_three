const express = require("express");
const router = express.Router();
const productsModel = require("../models/productData");

router.post("/sendData", (req, res) => {
  const productData = new productsModel(req.body);
  productData.save((err) => {
    if (err) {
      console.log("data loading to database failed for", err);
    } else {
      console.log("successfully data loaded");
      res.send("data sent successfully");
    }
  });
});

router.get("/getData", (req, res) => {
  productsModel.find({}, { _id: 0, __v: 0 }, (err, data) => {
    if (err) {
      console.log("There is  an :", err);
    } else {
      console.log("This is student data from from database:", data);

      res.send({ result: data });
    }
  });
});
module.exports = router;
