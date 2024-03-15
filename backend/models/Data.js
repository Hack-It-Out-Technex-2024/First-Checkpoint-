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
  rubber: {
    type: Number,
    required: true,
  },
  Days: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});
module.exports = mongoose.model("data", DataSchema);