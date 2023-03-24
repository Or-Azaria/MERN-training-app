import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
export default function NavBar() {
  const handleClick = () => {};
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout-tracker.</h1>
        </Link>
        <nav>
          <div>
            <button onClick={handleClick}>Log out</button>
          </div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
