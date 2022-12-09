import { Link } from 'react-router-dom';
import React from 'react';

export default function NavBar() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout-tracker 🏋🏾</h1>
        </Link>
      </div>
    </header>
  );
}
