import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import hooks React-Redux

const App = () => {
  const count = useSelector((state) => state.count); // Akses state count dari Redux
  const dispatch = useDispatch(); // Untuk mengirim action ke Redux store

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default App;
