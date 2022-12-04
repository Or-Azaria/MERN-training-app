import { useEffect, useState } from 'react';

//components
import WorkoutDetails from '../components/WorkoutDetails';

export default function Home() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch('/api/workouts');
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };
    fetchWorkout();
  }, []);

  return (
    <div className="Home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
}
