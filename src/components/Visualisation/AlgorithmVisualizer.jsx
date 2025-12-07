// import { useEffect, useRef, useState } from "react";
// import Controls from "../Visualisation/Controls";

// const AlgorithmVisualizer = ({ title, getSteps, renderHeader, renderLayout }) => {
//     const [array, setArray] = useState([]);
//     const [steps, setSteps] = useState([]);
//     const [currentStep, setCurrentStep] = useState(0);
//     const [playing, setPlaying] = useState(false);
//     const [speed, setSpeed] = useState(300);

//     const intervalRef = useRef(null);

//     // Generate initial array only when getSteps becomes available
//     useEffect(() => {
//         if (getSteps) generateNewArray();
//     }, [getSteps]);

//     // Auto animation effect
//     useEffect(() => {
//         if (!playing) return;

//         intervalRef.current = setInterval(() => {
//             nextStep();
//         }, speed);

//         return () => clearInterval(intervalRef.current);
//     }, [playing, speed]);

//     // Next step logic (corrected)
//     const nextStep = () => {
//         if (steps.length === 0) return;

//         setCurrentStep(prev => {
//             const nextIndex = prev + 1;

//             // STOP if last step reached
//             if (nextIndex >= steps.length) {
//                 setPlaying(false);   // ⛔ stop animation
//                 return prev;         // stay at last step
//             }

//             setArray(steps[nextIndex].array);
//             return nextIndex;
//         });
//     };

//     // Previous step logic (corrected)
//     const prevStep = () => {
//         if (steps.length === 0) return;

//         setCurrentStep(prev => {
//             const prevIndex = prev > 0 ? prev - 1 : 0;
//             setArray(steps[prevIndex].array);
//             return prevIndex;
//         });
//     };

//     // Reset animation to beginning
//     const reset = () => {
//         setPlaying(false);
//         setCurrentStep(0);
//         setArray(steps[0]?.array || []);
//     };

//     // Generate new random array
//     const generateNewArray = () => {
//         setPlaying(false); // important fix!

//         const arr = Array.from({ length: 15 }, () => Math.floor(Math.random() * 90 + 10));
//         const generatedSteps = getSteps(arr);

//         setArray(arr);
//         setSteps(generatedSteps);
//         setCurrentStep(0);
//     };

//     const activeIndexes = steps[currentStep]?.indices || [];

//     return (
//         <div className="min-h-screen bg-[#0e1525] text-white p-6">
//             <div className="max-w-6xl mx-auto">

//                 {renderHeader && renderHeader()}
//                 {renderLayout && renderLayout(array, activeIndexes)}

//                 <Controls
//                     playing={playing}
//                     setPlaying={setPlaying}
//                     currentStep={currentStep}
//                     steps={steps}
//                     speed={speed}
//                     setSpeed={setSpeed}
//                     nextStep={nextStep}
//                     prevStep={prevStep}
//                     reset={reset}
//                     generateNewArray={generateNewArray}
//                     setCurrentStep={(step) => {
//                         setCurrentStep(step);
//                         setArray(steps[step].array);
//                     }}
//                 />

//             </div>
//         </div>
//     );
// };

// export default AlgorithmVisualizer;



import { useEffect, useRef, useState } from "react";
import Controls from "../Visualisation/Controls";

const AlgorithmVisualizer = ({ title, getSteps, renderHeader, renderLayout }) => {
  const [array, setArray] = useState([]);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(300);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (getSteps) generateNewArray();
  }, [getSteps]);

  useEffect(() => {
    if (!playing) return;

    intervalRef.current = setInterval(() => {
      nextStep();
    }, speed);

    return () => clearInterval(intervalRef.current);
  }, [playing, speed]);

  const nextStep = () => {
    if (steps.length === 0) return;

    setCurrentStep((prev) => {
      const nextIndex = prev + 1;

      if (nextIndex >= steps.length) {
        setPlaying(false);
        return prev;
      }

      setArray(steps[nextIndex].array);
      return nextIndex;
    });
  };

  const prevStep = () => {
    if (steps.length === 0) return;

    setCurrentStep((prev) => {
      const prevIndex = prev > 0 ? prev - 1 : 0;
      setArray(steps[prevIndex].array);
      return prevIndex;
    });
  };

  const reset = () => {
    setPlaying(false);
    setCurrentStep(0);
    setArray(steps[0]?.array || []);
  };

  const generateNewArray = () => {
    setPlaying(false);

    const arr = Array.from({ length: 15 }, () => Math.floor(Math.random() * 90 + 10));
    const generatedSteps = getSteps(arr);

    setArray(arr);
    setSteps(generatedSteps);
    setCurrentStep(0);
  };

  const activeIndexes = steps[currentStep]?.indices || [];
  const ranges = steps[currentStep]?.ranges || [];

  return (
    <div className="min-h-screen bg-[#0e1525] text-white p-6">
      <div className="max-w-6xl mx-auto">
        {renderHeader && renderHeader()}
        {renderLayout && renderLayout(array, activeIndexes, ranges)}

        <Controls
          playing={playing}
          setPlaying={setPlaying}
          currentStep={currentStep}
          steps={steps}
          speed={speed}
          setSpeed={setSpeed}
          nextStep={nextStep}
          prevStep={prevStep}
          reset={reset}
          generateNewArray={generateNewArray}
          setCurrentStep={(step) => {
            setCurrentStep(step);
            setArray(steps[step].array);
          }}
        />
      </div>
    </div>
  );
};

export default AlgorithmVisualizer;
