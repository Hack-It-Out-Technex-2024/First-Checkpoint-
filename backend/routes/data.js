const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Data = require("../models/Data");
const { query, validationResult, body } = require("express-validator");

//ROUTE 1:get All data of logged in user using :GET "/api/data/fetchdata, login required
router.get("/fetchdata", fetchuser, async (req, res) => {
    try {
      const notes = await Data.find({ user: req.user.id });
      res.json(notes);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
});
//ROUTE 2:add a new data using :POST "/api/data/adddata, login required
router.post(
  "/adddata",
  fetchuser,
  [
    body("plastic"),
    body("rubber"),
  ],
  async (req, res) => {
    try {
      const { plastic,rubber,days } = req.body;
      //if ther are no errors ,return bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Data({
        plastic,
        rubber,
        days,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);
module.exports = router;
