import { FaPlay, FaPause, FaRedo, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Controls = ({
    playing,
    setPlaying,
    currentStep,
    steps,
    speed,
    setSpeed,
    nextStep,
    prevStep,
    reset,
    generateNewArray,
    setCurrentStep,
}) => {
    return (
        <div className="bg-white rounded-xl p-6 shadow mt-10">

            {/* Top Row */}
            <div className="flex items-center justify-between mb-6">
                <button onClick={prevStep} className="bg-blue-500 px-4 py-2 rounded text-white">
                    <FaArrowLeft />
                </button>

                <button
                    onClick={() => setPlaying(!playing)}
                    className={`px-6 py-2 rounded text-white flex items-center gap-2 ${playing ? "bg-red-500" : "bg-green-500"
                        }`}
                >
                    {playing ? <FaPause /> : <FaPlay />}
                    {playing ? "Pause" : "Play"}
                </button>

                <button onClick={nextStep} className="bg-blue-500 px-4 py-2 rounded text-white">
                    <FaArrowRight />
                </button>
            </div>

            {/* Progress */}
            <div className="my-4">
                <p className="text-gray-700 text-sm">
                    Step {currentStep} of {steps.length - 1}
                </p>
                <input
                    type="range"
                    min="0"
                    max={steps.length - 1}
                    value={currentStep}
                    onChange={(e) => setCurrentStep(Number(e.target.value))}
                    className="w-full"
                />
            </div>

            {/* Speed */}
            <div className="my-4">
                <p className="text-gray-700 text-sm">Animation Speed</p>
                <input
                    type="range"
                    min="50"
                    max="1000"
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                    className="w-full"
                />
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 mt-6">
                <button
                    onClick={reset}
                    className="flex-1 bg-gray-600 px-4 py-3 rounded text-white"
                >
                    <FaRedo /> Reset
                </button>

                <button
                    onClick={generateNewArray}
                    className="flex-1 bg-purple-600 px-4 py-3 rounded text-white"
                >
                    <FaRedo /> New Array
                </button>
            </div>
        </div>
    );
};

export default Controls;
