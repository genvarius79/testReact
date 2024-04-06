export default function Controls({ values, updateX, updateY, reset }) {
  return (
    <div>
      <p>
        x: {values.x}, y: {values.y}
      </p>

      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
