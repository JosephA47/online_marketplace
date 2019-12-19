var orm = require("../config/orm");

var product = {
    selectAll: function(cb) {
      return orm.selectAll("products", function(res){
        cb(res)
      });
    },
    updateOne: function(objColVals, condition, cb) {
      return orm.updateOne("products", objColVals, condition, function(res){
        cb(res)
      });
    }
};

module.exports = product;