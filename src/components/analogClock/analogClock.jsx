'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const initialData = [
  {
    time: '4:00 AM',
    info: 'Focus on short-biased trades for tickers that have surged or been pumped after hours. Typically, these tickers fade back as sellers step in. However, there is a risk that, on rare occasions, they may continue to grind higher without stopping.',
  },
  {
    time: '7:00 AM',
    info: "Most brokerages open now, allowing pre-market trading. At this point, you can observe if there was a trap set from 4am to 7am and whether the initial fade reverses or continues. The ticker might stay heavy and fade further, leading to a round trip or a red move. Additionally, news and press releases are often issued at this time, fueling new moves. Traders also react to news and events that occurred after the previous day's close or from 5am to 6am.",
  },
  {
    time: '8:00 AM',
    info: 'This is the time when "late prints" occur. These are trade executions reported after the actual trade has taken place. Late prints can provide insights into significant transactions or large block trades that may impact prices. However, they can also add to the confusion for investors who rely on real-time data for decision-making.',
  },
  {
    time: '9:20 AM',
    info: 'At this time, imbalances are noticed, and peak fear sets in just before the opening bell, especially for those on the wrong side of the trade in small-cap stocks. This period often highlights significant pre-market volatility and trader anxiety as the market prepares to open.',
  },
  {
    time: '10:00 AM',
    info: "This is the time to re-evaluate your trade decisions from the opening bell and check your biases. For instance, if you planned to fade a stock after a big gap up but notice it bouncing back from a quick drop at the open, it's useful to wait for more information. Determine if the drop was a morning washout, signaling a possible multi-day run, or if it was a trap taking out short positions, leading to a fade back after testing previous highs.",
  },
  {
    time: '11:30 AM',
    info: "This is the time to start watching for a specific setup: the 'afternoon breakout.' While this setup can begin at 12 or 12:30, it's important to start monitoring at 11:30. Look for a stock that ran pre-market, then faded back without retracing more than 50% (based on Fibonacci retracement), and has consolidated above the VWAP for more than two hours.",
  },
  {
    time: '2:00 PM',
    info: 'This is the time when a stock that has held up well and made lower highs without breaking key support levels may start to crack and fade, frustrating shorts who lose patience. Random spikes can occur out of nowhere, and stocks may peak before fading into the close, trapping more short positions. This is when you need to be most creative and read between the lines, carefully analyzing market behavior and patterns.',
  },
  {
    time: '3:30 PM',
    info: 'At this time, there are typically two trade outcomes. Either the stock fades into the close, trapping short-biased traders and punishing them after hours, or it makes a blowout move into the close and then fades back.',
  },
  { time: '6:00 PM', info: 'Dinner' },
];

const times = [
  { time: '4:00 AM', angle: 120 },
  { time: '7:00 AM', angle: 210 },
  { time: '8:00 AM', angle: 240 },
  { time: '9:20 AM', angle: 280 },
  { time: '10:00 AM', angle: 300 },
  { time: '11:30 AM', angle: 345 },
  { time: '2:00 PM', angle: 60 },
  { time: '3:30 PM', angle: 105 },
];

const AnalogClock = () => {
  const initialSelectedTime = new Date();
  initialSelectedTime.setHours(4);
  initialSelectedTime.setMinutes(0);
  const [selectedTime, setSelectedTime] = useState(initialSelectedTime);
  const [data, setData] = useState(initialData);

  const handleClockClick = (time) => {
    const selectedDate = new Date();
    const [hours, minutes] = time.split(':');
    const ampm = time.slice(-2);
    const selectedHours =
      parseInt(hours) + (ampm === 'PM' && hours !== '12' ? 12 : 0);
    selectedDate.setHours(selectedHours);
    selectedDate.setMinutes(minutes ? parseInt(minutes) : 0);
    setSelectedTime(selectedDate);
  };

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const adjustedHours = hours % 12 || 12;
    const adjustedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${adjustedHours}:${adjustedMinutes} ${ampm}`;
  };

  const getInfoForTime = (date) => {
    const formattedTime = formatTime(date);
    const entry = data.find((item) => item.time === formattedTime);
    return entry ? entry.info : 'No info for this time';
  };

  const calculateHandAngles = (date) => {
    const hours = date.getHours() % 12;
    const minutes = date.getMinutes();
    const hourAngle = (hours + minutes / 60) * 30;
    const minuteAngle = minutes * 6;
    return { hourAngle, minuteAngle };
  };

  const { hourAngle, minuteAngle } = calculateHandAngles(selectedTime);

  const isSelectedTime = (time) => {
    const formattedTime = formatTime(selectedTime);
    return formattedTime === time;
  };

  return (
    <div className="my-10 flex flex-col items-center">
      <svg
        width="400"
        height="400"
        viewBox="0 0 300 300"
        className="cursor-pointer"
      >
        <circle
          cx="150"
          cy="150"
          r="145"
          stroke="var(--text-color-primary-500)"
          strokeWidth="2"
          fill="none"
        />
        {times.map(({ time, angle }) => {
          const x = 150 + 130 * Math.cos((angle - 90) * (Math.PI / 180));
          const y = 150 + 130 * Math.sin((angle - 90) * (Math.PI / 180));
          const isSelected = isSelectedTime(time);
          return (
            <g
              key={time}
              onClick={() => handleClockClick(time)}
              className="cursor-pointer"
            >
              <circle
                cx={x}
                cy={y}
                r="15"
                fill="var(--background-topic-blue)"
                stroke={isSelected ? '#BB5B11' : 'none'}
              />
              <text
                x={x - 15}
                y={y + 5}
                fontSize="10"
                fill="var(--text-color-primary-700)"
                className="font-bold"
              >
                {time}
              </text>
            </g>
          );
        })}
        {selectedTime && (
          <>
            <motion.line
              x1="150"
              y1="150"
              x2={
                150 +
                60 *
                  Math.cos(
                    (calculateHandAngles(selectedTime).hourAngle - 90) *
                      (Math.PI / 180)
                  )
              }
              y2={
                150 +
                60 *
                  Math.sin(
                    (calculateHandAngles(selectedTime).hourAngle - 90) *
                      (Math.PI / 180)
                  )
              }
              stroke="var(--text-color-primary-400)"
              strokeWidth="4"
              animate={{
                x2: 150 + 60 * Math.cos((hourAngle - 90) * (Math.PI / 180)),
                y2: 150 + 60 * Math.sin((hourAngle - 90) * (Math.PI / 180)),
              }}
              transition={{ duration: 0.5 }}
            />
            <motion.line
              x1="150"
              y1="150"
              x2={
                150 +
                90 *
                  Math.cos(
                    (calculateHandAngles(selectedTime).minuteAngle - 90) *
                      (Math.PI / 180)
                  )
              }
              y2={
                150 +
                90 *
                  Math.sin(
                    (calculateHandAngles(selectedTime).minuteAngle - 90) *
                      (Math.PI / 180)
                  )
              }
              stroke="var(--text-color-primary-300)"
              strokeWidth="2"
              animate={{
                x2: 150 + 90 * Math.cos((minuteAngle - 90) * (Math.PI / 180)),
                y2: 150 + 90 * Math.sin((minuteAngle - 90) * (Math.PI / 180)),
              }}
              transition={{ duration: 0.5 }}
            />
          </>
        )}
      </svg>
      {selectedTime && (
        <div className="mt-8">
          <span className="bg-[var(--background-topic-blue)] p-2 rounded-lg border border-[#BB5B11]">
            {formatTime(selectedTime)}
          </span>
          <p className="var(--text-color-primary-900) border border-[var(--text-color-primary-300)] rounded-lg p-2">
            {getInfoForTime(selectedTime)}
          </p>
        </div>
      )}
    </div>
  );
};

export default AnalogClock;
