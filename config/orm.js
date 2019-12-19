var connection = require("./connection");

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    console.log(queryString);

    connection.query(queryString, function(err, res) {
      if(err){
        return err
      }
      cb(res);
    });
  },
   
  updateOne: function(table, object, condition) {
    var queryString = "UPDATE " + table;
  
    queryString += " SET ";
    queryString += objToSql(object);
    queryString += " WHERE ";
    queryString += condition;
  
    console.log(queryString);
    return connection.query(queryString)
  }
};

module.exports = orm;