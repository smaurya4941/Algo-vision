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
          description="Quick Sort selects a pivot, partitions the array into smaller and larger values, and recursively sorts the partitions. Its efficient partitioning makes it one of the fastest general-purpose sorting algorithms."
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
          pseudocode={<QuickSortPseudoCode />}
        />
      )}
    />
  );
};

export default Quick;
