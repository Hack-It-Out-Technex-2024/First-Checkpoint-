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
    body("glass"),
    body("paper"),
    body("mettalic"),
    body("Ewaste"),
  ],
  async (req, res) => {
    try {
      const { plastic, glass, mettalic, Ewaste, paper, days } = req.body;
      //if ther are no errors ,return bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Data({
        plastic,
        glass,
        mettalic,
        Ewaste,
        paper,
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
//ROUTE 3:updating an existing data using :Put "/api/notes/updatenote, login required
router.put("/updatedata/:id", fetchuser, async (req, res) => {
  const { plastic, glass, mettalic, Ewaste, paper, days } = req.body; //creating a NewNote object;
  try {
    const newNote = {};
    if (plastic) {
      newNote.plastic = plastic;
    }
    if (glass) {
      newNote.glass = glass;
    }
    if (mettalic) {
      newNote.mettalic = mettalic;
    }
    if (Ewaste) {
      newNote.Ewaste = Ewaste;
    }
    if (paper) {
      newNote.paper = paper;
    }
    if (days) {
      newNote.days = days;
    }
    //Find the note to be updated and update it
    let note = await Data.findById(req.params.id);
    
    if (!note) {
      return res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("NOt allowed");
    }
    note = await Data.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});
module.exports = router;
