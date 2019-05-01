const express = require("express");
const router = express.Router();
const actions = require("./actions");

router.get("/get/data", async (req, res, next) => {
  // console.log("==============get==========")
  const data = await actions
    .getDemoData()
    .catch(e => releaseEvents.status(404).send(e));
  res.status(200).send(data);
});

router.post("/add/data", async (req, res, next) => {
  const data = await actions
    .addDemoData(req.body.name, req.body.age, req.body.city, req.body.car)
    .catch(e => releaseEvents.status(404).send(e));
  res.status(200).send(data);
});

router.post("/edit/data", async (req, res, next) => {
  const data = await actions
    .editDemoData(req.body.id, req.body.changed)
    .catch(e => releaseEvents.status(400).send(e));
  res.status(200).send(data);
});

router.post("/delete/data", async (req, res, next) => {
  const data = await actions
    .deleteDemoData(req.body.id, req.body.changed)
    .catch(e => releaseEvents.status(400).send(e));
  res.status(200).send(data);
});

module.exports = router;
