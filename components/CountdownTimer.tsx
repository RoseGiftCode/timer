// components/CountdownTimer.tsx

import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate: string;
  style?: React.CSSProperties;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, style }) => {
  const [timeLeft, setTimeLeft] = useState<string>('');
  const [color, setColor] = useState<string>('green');
  const [isBlinking, setIsBlinking] = useState<boolean>(false); // New state to control blinking

  useEffect(() => {
    const updateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft('Event started!');
        setColor('red');
        setIsBlinking(false); // Stop blinking after the event starts
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      // Change color and blinking state based on days left
      if (days < 1) {
        setColor('red'); // Less than 1 day remaining
        setIsBlinking(true); // Start blinking
      } else if (days <= 15) {
        setColor('yellow'); // Half-way mark
        setIsBlinking(false); // Stop blinking
      } else {
        setColor('green'); // Early stages
        setIsBlinking(false); // Stop blinking
      }
    };

    const timerId = setInterval(updateTimeLeft, 1000);
    return () => clearInterval(timerId);
  }, [targetDate]);

  return (
    <div
      style={{ ...style, color }}
      className={isBlinking ? 'blinking' : ''} // Apply blinking class conditionally
    >
      {timeLeft}
      <style jsx>{`
        .blinking {
          animation: blinker 1s linear infinite;
        }

        @keyframes blinker {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CountdownTimer;
