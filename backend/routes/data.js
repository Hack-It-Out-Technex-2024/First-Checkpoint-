const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Data = require("../models/Data");
const { query, validationResult, body } = require("express-validator");

//ROUTE 1:get All data of logged in user using :GET "/api/notes/fetchdata, login required
router.get("/fetchdata", fetchuser, async (req, res) => {
    try {
      const notes = await Data.find({ user: req.user.id });
      res.json(notes);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  });