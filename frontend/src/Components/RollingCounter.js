import React, { useState, useEffect, useRef } from 'react';

const RollingCounter = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);
  const counterRef = useRef(null); // Ref for the counter div
  const hasRunRef = useRef(false); // Ref to track if the counter has run to completion

  // Intersection Observer callback
  const callbackFunction = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && !hasRunRef.current) {
      hasRunRef.current = true; // Set the flag to true
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range));

      const timer = setInterval(() => {
        setCount((prevCount) => {
          const nextCount = prevCount + increment;
          if (nextCount === end) {
            clearInterval(timer);
          }
          return nextCount;
        });
      }, stepTime);
    }
  };

  // Set up the Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction);
    if (counterRef.current) observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) observer.disconnect();
    };
  }, [end, start, duration]);

  return <div ref={counterRef}>{count}</div>;
};

export default RollingCounter;