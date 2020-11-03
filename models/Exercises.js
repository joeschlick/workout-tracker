const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExercisesSchema = new Schema({
  day: {
    type: Date,
  },

  exercises: [
    {
      type: {type: String, trim: true,},
      name: {type: String, trim: true,},
      duration: {type: Number},
      weight: {type: Number},
      reps: {type: Number},
      sets: {type: Number},
  }],

});

const Exercises = mongoose.model("Exercises", ExercisesSchema);

module.exports = Exercises;