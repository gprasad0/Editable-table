var express = require("express");
var router = express.Router();
var ip = require("ip");
var actions = require("./mysql/dbsetup");
var chalk = require("chalk");
const Demotable = require("./demotable/index");


//calling the database setup
actions
  .setup()
  .then(() => {
    console.log(
      chalk.blue("We are live on : ") +
        "http://" +
        ip.address() +
        ":3000/dashboard"
    );
  })
  .catch(err => {
    console.log(err);
  });
  
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});
console.log("ip:", ip.address());

router.use("/demo", Demotable);

module.exports = router;
