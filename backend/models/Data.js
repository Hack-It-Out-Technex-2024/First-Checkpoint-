const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DataSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  }, 
  plastic:{
    type: Number,
    required: true,
  },
  paper: {
    type: Number,
    required: true,
  },
  mettalic: {
    type: Number,
    required: true,
  },
  glass: {
    type: Number,
    required: true,
  },
  Ewaste: {
    type: Number,
    required: true,
  },
  days: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});
module.exports = mongoose.model("data", DataSchema);