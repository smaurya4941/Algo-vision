
import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPause, FaPlay, FaRedo } from "react-icons/fa";
import { getBubbleSortSteps } from "./utils/bubbleSort";

const BubbleSortVisualizer = () => {
  const [array, setArray] = useState([9, 16, 23, 70, 59, 77, 76, 71, 37, 77, 34, 27, 11, 36, 91]);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(300);

  const intervalRef = useRef(null);

  // Generate steps on mount
  useEffect(() => {
    setSteps(getBubbleSortSteps(array));
  }, []);

  // Auto play animation
  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) {
            setPlaying(false);
            return prev;
          }
          setArray(steps[prev + 1].array);
          return prev + 1;
        });
      }, speed);
    }

    return () => clearInterval(intervalRef.current);
  }, [playing, speed, steps]);

  const goNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setArray(steps[currentStep + 1].array);
    }
  };

  const goPrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setArray(steps[currentStep - 1].array);
    }
  };

  const reset = () => {
    setPlaying(false);
    setCurrentStep(0);
    setArray(steps[0]?.array || array);
  };
  //create new random array
  const newArray = () => {
    const arr = Array.from({ length: 15 }, () => Math.floor(Math.random() * 90 + 10));
    const newSteps = getBubbleSortSteps(arr);
    setArray(arr);
    setSteps(newSteps);
    setCurrentStep(0);
    setPlaying(false);
  };

  // Detect active comparison
  const activeIndexes =
    steps[currentStep]?.indices ? steps[currentStep].indices : [];

  return (
    <div className="min-h-screen bg-[#0e1525] text-white p-6">
      <div className="max-w-6xl mx-auto">

        {/* MAIN VISUAL BLOCK */}
        <div className="bg-white rounded-xl p-6 mb-6 shadow">
          <div className="flex items-end justify-center gap-2 h-64">

            {array.map((value, index) => {
              const isActive = activeIndexes.includes(index);

              return (
                <div
                  key={index}
                  className={`flex flex-col justify-end items-center rounded-t transition-all duration-300`}
                  style={{
                    height: `${value * 2}px`,
                    width: "35px",
                    backgroundColor: isActive
                      ? "#FFC107" // Yellow for active
                      : "#4dabff", // Blue default
                  }}
                >
                  <span className="text-xs text-black mt-2">{value}</span>
                </div>
              );
            })}

          </div>
        </div>

        {/* CONTROLS */}
        <div className="bg-white rounded-xl p-6 shadow">

          {/* Top Controls Row */}
          <div className="flex items-center justify-between mb-6">

            {/* Previous Button */}
            <button
              onClick={goPrev}
              className="bg-blue-500 px-4 py-2 rounded text-white shadow hover:bg-blue-600"
            >
              <FaArrowLeft />
            </button>

            {/* Play / Pause */}
            <button
              onClick={() => setPlaying(!playing)}
              className={`px-6 py-2 rounded text-white shadow flex items-center gap-2 ${
                playing ? "bg-red-500" : "bg-green-500"
              }`}
            >
              {playing ? <FaPause /> : <FaPlay />}
              {playing ? "Pause" : "Play"}
            </button>

            {/* Next Button */}
            <button
              onClick={goNext}
              className="bg-blue-500 px-4 py-2 rounded text-white shadow hover:bg-blue-600"
            >
              <FaArrowRight />
            </button>
          </div>

          {/* Progress Slider */}
          <div className="my-4">
            <p className="text-gray-700 text-sm">
              Step {currentStep} of {steps.length - 1}
            </p>
            <input
              type="range"
              min="0"
              max={steps.length - 1}
              value={currentStep}
              onChange={(e) => {
                setCurrentStep(Number(e.target.value));
                setArray(steps[e.target.value].array);
              }}
              className="w-full mt-2"
            />
          </div>

          {/* Speed Slider */}
          <div className="my-4">
            <p className="text-gray-700 text-sm">Animation Speed</p>
            <input
              type="range"
              min="50"
              max="1000"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full mt-2"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Slow</span>
              <span>Fast</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-6">

            {/* Reset */}
            <button
              onClick={reset}
              className="flex-1 bg-gray-600 px-4 py-3 rounded text-white hover:bg-gray-700 flex gap-2 justify-center items-center"
            >
              <FaRedo />
              Reset
            </button>

            {/* New Array */}
            <button
              onClick={newArray}
              className="flex-1 bg-purple-600 px-4 py-3 rounded text-white hover:bg-purple-700 flex gap-2 justify-center items-center"
            >
              <FaRedo />
              New Array
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BubbleSortVisualizer;
