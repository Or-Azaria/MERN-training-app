import { useEffect, useState } from 'react';

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
          workouts.map((workout) => <p key={workout._id}>{workout.title}</p>)}
      </div>
    </div>
  );
}
