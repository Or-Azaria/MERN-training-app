require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const workoutsRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use('/api/workouts', workoutsRoutes);
app.use('/api/user', userRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT);
    });
  })
  .catch((err) => console.log(err));
