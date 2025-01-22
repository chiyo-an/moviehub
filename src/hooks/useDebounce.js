import { useState, useEffect } from 'react';

// useDebounce 커스텀훅 정의
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => { 
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay); 

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};