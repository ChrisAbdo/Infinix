import { MotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const fontSize = 30;
const padding = 15;
const height = fontSize + padding;

export default function Counter({ value }: { value: number }) {
  // Calculate the number of digits in the value
  const numDigits = Math.max(String(value).length, 3); // Ensure there's a minimum of 3 digits

  // Create an array of places e.g., [1000, 100, 10, 1] for the value 1234
  const places = Array.from({ length: numDigits }, (_, idx) =>
    Math.pow(10, numDigits - idx - 1)
  );

  return (
    <div
      style={{ fontSize }}
      className="flex space-x-3 overflow-hidden rounded bg-white px-2 leading-none text-gray-900"
    >
      {places.map((place) => (
        <Digit key={place} place={place} value={value} />
      ))}
    </div>
  );
}

function Digit({ place, value }: { place: number; value: number }) {
  let valueRoundedToPlace = (value / place) % 10;
  let animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height }} className="relative w-[1ch] tabular-nums">
      {/* @ts-ignore */}
      {[...Array(10).keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

function Number({ mv, number }: { mv: MotionValue; number: number }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {number}
    </motion.span>
  );
}
