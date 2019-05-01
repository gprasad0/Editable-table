"use strict";
const mysql = require("mysql");
const chalk = require("chalk");
var db;
function setupDB(options, callback) {
  db = mysql.createConnection({
    host: options.host,
    user: options.user,
    password: options.pwd,
    database: "Demo"

    //multipleStatements: true
  });
  db.connect(function(err) {
    if (err) {
      console.log(chalk.red("Error: Couldn't connect to db"));
      return callback(err);
    } else {
      console.log(
        chalk.blue("Server: ") +
          chalk.green(` Connection to ${options.db} DB successfull!`)
      );
      return callback(null);
    }
  });
  return callback(null);
}

function getData(query) {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject(new Error("Couldn't connect to the Database"));
    }
    var sql = query;
    db.query(sql, function(err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
module.exports = {};
module.exports.setupDB = setupDB;
module.exports.getData = getData;
