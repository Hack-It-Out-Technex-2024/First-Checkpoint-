// CircularProgressBar.jsx

import React, { useEffect, useState, useRef } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = ({ data, target }) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const percentage = (data / target) * 100;
  const counterRef = useRef(null); // Ref for IntersectionObserver

  useEffect(() => {
    const callbackFunction = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start the animation when the progress bar is in view
          const animationDuration = 1000; // in milliseconds
          const step = 10; // Increase this value for smoother animation

          let currentValue = 0;
          const interval = setInterval(() => {
            currentValue += step;
            if (currentValue >= percentage) {
              clearInterval(interval);
              setAnimatedValue(percentage);
            } else {
              setAnimatedValue(currentValue);
            }
          }, animationDuration / (percentage / step));
        }
      });
    };

    const observer = new IntersectionObserver(callbackFunction);
    if (counterRef.current) observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) observer.disconnect();
    };
  }, [percentage]);

  return (
    <div style={{ width: '200px', height: '200px' }}>
      <CircularProgressbar
        value={animatedValue}
        text={`${animatedValue.toFixed(2)}%`}
        styles={{
          root: {},
          path: {
            stroke: 'rgb(0, 201, 93)', // Set the color to blue
            strokeLinecap: 'round', // Make the line ends rounded
            opacity: 0.8, // Set transparency (adjust as needed)
          },
          trail: {
            stroke: 'none', // Remove the white background
          },
        }}
      />
      <div ref={counterRef} style={{ height: '1px' }}></div> {/* IntersectionObserver target */}
    </div>
  );
};

export default CircularProgressBar;