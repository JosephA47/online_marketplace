var express = require("express");
var product = require("../models/product")
var router = express.Router();

router.get("/", function(req, res) {
  res.redirect("/products")
})

router.get("/products", function(req, res) {
  product.selectAll(function(data) {
    var obj = {
      product: data
    }

    console.log(obj);
    res.render("index", obj);
  });
});

router.put("/products/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  product.updateOne(
    {
      inCart: req.body.inCart
    },
    condition,
    
    function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
      location.reload()
    }
  );
});

module.exports = router;