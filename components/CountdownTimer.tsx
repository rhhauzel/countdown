"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string; // Format: "YYYY-MM-DDTHH:mm:ss"
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  // Initialize with 0 values to prevent SSR hydration mismatch
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference <= 0) {
        setIsExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // Set initial time on client mount
    setTimeLeft(calculateTimeLeft());

    // Update time every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  // Helper function to pad single digits with leading zeros
  const formatNumber = (num: number) => String(num).padStart(2, "0");

  if (isExpired) {
    return (
      <div className="text-center text-2xl font-bold text-red-500">
        🎉 The event has started!
      </div>
    );
  }

  return (
    <div className="flex gap-4 justify-center items-center font-mono">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg min-w-[80px]">
          <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
            {formatNumber(value)}
          </span>
          <span className="text-xs uppercase text-gray-500 dark:text-gray-400 mt-1">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
}