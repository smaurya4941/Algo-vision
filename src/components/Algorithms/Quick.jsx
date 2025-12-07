import { getQuickSortSteps } from "../../utils/quicksort";
import QuickSortPseudoCode from "../Pseudocodes/QuickSortPseudoCode";
import AlgorithmInfo from "../Visualisation/AlgorithmInfo";
import AlgorithmVisualizer from "../Visualisation/AlgorithmVisualizer";
import VisualizationLayout from "../Visualisation/VisualizationLayout";

const Quick = () => {
  return (
    <AlgorithmVisualizer
      title="Quick Sort"
      getSteps={getQuickSortSteps}
      renderHeader={() => (
        <AlgorithmInfo
          title="Qucik Sort"
          description="Merge Sort divides the array into halves, recursively sorts each half, and merges them together. It follows the divide-and-conquer approach and guarantees O(n log n) time complexity in all cases."
          time="O(n log n)"
          space="O(n)"
          category="Sorting"
          difficulty="Hard"
        />
      )}

    
      renderLayout={(array, activeIndexes, ranges) => (
        <VisualizationLayout
          array={array}
          activeIndexes={activeIndexes}
          ranges={ranges}     // <-- REQUIRED FOR RECURSION VISUALIZATION
          pseudocode={<QuickSortPseudoCode />}
        />
      )}
    />
  );
};

export default Quick;
