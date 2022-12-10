import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

export default function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const res = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE',
    });
    const json = res.json();

    if (res.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): {workout.load}</strong>
      </p>
      <p>
        <strong>Reps: {workout.reps}</strong>
      </p>
      <p>
        <strong>Sets: {workout.sets}</strong>
      </p>
      <p>{workout.createdAt}</p>
      <span onClick={handleClick}>Delete</span>
    </div>
  );
}
