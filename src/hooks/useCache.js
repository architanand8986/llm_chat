import { useState, useEffect } from 'react';

// usage: const [value, setValue] = useCache('myKey', initialValue);
function useCache(key, initialValue) {
  const [value, setValue] = useState(() => {
    const cached = localStorage.getItem(key);
    return cached ? JSON.parse(cached) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useCache;