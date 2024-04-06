import Controls from '../Controls/Controls';
import './App.css';

import { useState, useEffect } from 'react';

// ClickCounter отримує функцію onUpdate (ім'я пропа),
// яка викликається під час події onClick

export const App = () => {
  const [values, setValues] = useState(() => {
    const savedValues = JSON.parse(localStorage.getItem('saved-values'));
    if (savedValues !== null) {
      return savedValues;
    }
    return { x: 0, y: 0 };
  });

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };

  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
  };
  const reset = () => {
    setValues({
      x: 0,
      y: 0,
    });
  };
  useEffect(() => {
    localStorage.setItem('saved-values', JSON.stringify(values));
  }, [values]);
  return (
    <>
      <Controls
        values={values}
        updateX={updateX}
        updateY={updateY}
        reset={reset}
      ></Controls>
    </>
  );
};
