const mysql = require("../mysql/mysqldb");
function setup() {
  return new Promise((resolve, reject) => {
    mysql.setupDB(
      {
        host: "localhost",
        user: "root",
        password: "",
        database: "Demo"
      },
      function(err) {
        if (err) {
          reject(err);
        }
        resolve();
      }
    );
  });
}
module.exports.setup = setup;
