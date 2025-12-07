import { getInsertionSortSteps } from "../../utils/insertionSort";
import InsertionSortPseudocode from "../Pseudocodes/InsertionSortPseudoCode";
import AlgorithmInfo from "../Visualisation/AlgorithmInfo";
import AlgorithmVisualizer from "../Visualisation/AlgorithmVisualizer";
import VisualizationLayout from "../Visualisation/VisualizationLayout";

const Insertion = () => {
  return (
    <div >
    <AlgorithmVisualizer
      title="Insertion Sort"
      getSteps={getInsertionSortSteps}
      renderHeader={() => (
        <AlgorithmInfo
          title="Insertion Sort"
          description="Builds the sorted list by inserting each element into its correct position."
          time="O(n²)"
          space="O(1)"
          category="Sorting"
          difficulty="medium"
          
        />
      )}
      renderLayout={(array, activeIndexes,ranges) => (
        <VisualizationLayout
          array={array}
          activeIndexes={activeIndexes}
          ranges={ranges} 
          pseudocode={<InsertionSortPseudocode/>}
        />
      )}
    />

    </div>
  );
};

export default Insertion;
