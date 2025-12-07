import { getMergeSortSteps } from "../../utils/mergeSort";
import MergeSortPseudoCode from "../Pseudocodes/MergeSortPseudoCode";
import AlgorithmInfo from "../Visualisation/AlgorithmInfo";
import AlgorithmVisualizer from "../Visualisation/AlgorithmVisualizer";
import VisualizationLayout from "../Visualisation/VisualizationLayout";

const Merge = () => {
  return (
    <AlgorithmVisualizer
      title="Merge Sort"
      getSteps={getMergeSortSteps}
      renderHeader={() => (
        <AlgorithmInfo
          title="Merge Sort"
          description="Merge Sort divides the array into halves, recursively sorts each half, and merges them together. It follows the divide-and-conquer approach and guarantees O(n log n) time complexity in all cases."
          time="O(n log n)"
          space="O(n)"
          category="Sorting"
          difficulty="Medium"
        />
      )}

    
      renderLayout={(array, activeIndexes, ranges) => (
        <VisualizationLayout
          array={array}
          activeIndexes={activeIndexes}
          ranges={ranges}     // <-- REQUIRED FOR RECURSION VISUALIZATION
          pseudocode={<MergeSortPseudoCode />}
        />
      )}
    />
  );
};

export default Merge;
