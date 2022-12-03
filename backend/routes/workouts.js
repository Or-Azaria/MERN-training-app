const express = require('express');
const Workout = require('../models/workoutModel');

const router = express();

//GET ALL WORKOUTS
router.get('/', (req, res) => {
  res.json({ mssg: 'get all workouts' });
});

//GET SINGLE WORKOUT
router.get('/:id', (req, res) => {
  res.json({ mssg: 'get a single workout' });
});

//POST A NEW WORKOUT
router.post('/', async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

//DELETE A WORKOUT
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'delete a workout' });
});

//UPDATE A WORKOUT
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'updated a workout' });
});

module.exports = router;
