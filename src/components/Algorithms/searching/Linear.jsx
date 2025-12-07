import { useState } from "react";
import { getLinearSearchSteps } from "../../../utils/linearSearch"
import LinearSearchPseudocode from "../../Pseudocodes/Searching/LinearSearchPseudoCode";
import AlgorithmInfo from "../../Visualisation/AlgorithmInfo";
import AlgorithmVisualizer from "../../Visualisation/AlgorithmVisualizer";
import VisualizationLayout from "../../Visualisation/VisualizationLayout";

const Linear = () => {
  const [target, setTarget] = useState(null);

  return (
    <div>
       
       {/* Target Input Field
      <div className="bg-white p-4 rounded-lg shadow mb-6 max-w-md mx-auto">
        <label className="text-gray-700 font-semibold">Enter Target Value:</label>
        <input
          type="number"
          className="border border-gray-400 p-2 ml-3 rounded"
          onChange={(e) => setTarget(Number(e.target.value))}
          placeholder="Enter a number"
        />
      </div> */}

      <AlgorithmVisualizer
        title="Linear Search"

        //  PASS THE TARGET TO STEPS
        // getSteps={(array) => getLinearSearchSteps(array, target)}

        getSteps={(array) => {
            const randomIndex = Math.floor(Math.random() * array.length);
            const t = array[randomIndex];      //  default target index
            setTarget(t);            //  show on screen
            return getLinearSearchSteps(array, t);
          }}

        renderHeader={() => (
          <AlgorithmInfo
            title="Linear Search"
            description={`Linear Search scans elements one by one until the target is found.
                Current target value: ${target !== null ? target : "Loading..."}`}
            time="Best: O(1), Worst: O(n)"
            space="O(1)"
            category="Searching"
            difficulty="Easy"
          />
        )}

        renderLayout={(array, activeIndexes, ranges) => (
          <VisualizationLayout
            array={array}
            activeIndexes={activeIndexes}
            ranges={ranges}
            pseudocode={<LinearSearchPseudocode />}
          />
        )}
      />
    </div>
  );
};

export default Linear;
