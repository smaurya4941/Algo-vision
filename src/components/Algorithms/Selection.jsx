import { getSelectionSortSteps } from "../../utils/selectionSort";
import SelectionSortPseudocode from "../Pseudocodes/SelectionSortPseudoCode";
import AlgorithmInfo from "../Visualisation/AlgorithmInfo";
import AlgorithmVisualizer from "../Visualisation/AlgorithmVisualizer";
import VisualizationLayout from "../Visualisation/VisualizationLayout";

const Selection = () => {
  return (
    <div >
    <AlgorithmVisualizer
      title="Bubble Sort"
      getSteps={getSelectionSortSteps}
      renderHeader={() => (
        <AlgorithmInfo
          title="Selection Sort"
          description="Selection Sort selects the smallest element from the unsorted portion and places it in its correct position.
It reduces the number of swaps but still performs poorly on big inputs."
          time="O(n²)"
          space="O(1)"
          category="Sorting"
          difficulty="Easy"
          
        />
      )}
      renderLayout={(array, activeIndexes,ranges) => (
        <VisualizationLayout
          array={array}
          activeIndexes={activeIndexes}
          ranges={ranges} 
          pseudocode={<SelectionSortPseudocode/> }
        />
      )}
    />

    </div>
  );
};

export default Selection;
