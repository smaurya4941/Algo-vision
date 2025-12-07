import { useState } from "react";
import { getBinarySearchSteps } from "../../../utils/binarySearch"
import BinarySearchPseudocode from "../../Pseudocodes/Searching/BinarySearchPseudoCode";
import AlgorithmInfo from "../../Visualisation/AlgorithmInfo";
import AlgorithmVisualizer from "../../Visualisation/AlgorithmVisualizer";
import VisualizationLayout from "../../Visualisation/VisualizationLayout";


const Binary = () => {
  const [target, setTarget] = useState(null);

  return (
    <AlgorithmVisualizer
      title="Binary Search"

      getSteps={(array) => {
        // Array must be sorted
        let sorted = [...array].sort((a, b) => a - b);

        const randomIndex = Math.floor(Math.random() * sorted.length);
        const t = sorted[randomIndex];

        setTarget(t);

        return getBinarySearchSteps(sorted, t);
      }}

      renderHeader={() => (
        <AlgorithmInfo
          title="Binary Search"
          description={`Binary Search reduces the search range by half each time.
Current target: ${target !== null ? target : "Loading..."}`}
          time="O(log n)"
          space="O(1)"
          category="Searching"
          difficulty="Easy"
        />
      )}

      renderLayout={(array, activeIndexes, ranges) => (
        <VisualizationLayout
          array={array.sort((a,b)=>a-b)}
          activeIndexes={activeIndexes}
          ranges={ranges}
          pseudocode={<BinarySearchPseudocode />}
        />
      )}
    />
  );
};

export default Binary;
