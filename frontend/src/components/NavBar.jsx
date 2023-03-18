import { Link } from 'react-router-dom';
import React from 'react';

export default function NavBar() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout-tracker.</h1>
        </Link>
        <nav>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
