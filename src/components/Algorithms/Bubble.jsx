  import { getBubbleSortSteps } from "../../utils/bubbleSort";
  import BubbleSortPseudocode from "../Pseudocodes/BubbleSortPseudoCode";
  import AlgorithmInfo from "../Visualisation/AlgorithmInfo";
  import AlgorithmVisualizer from "../Visualisation/AlgorithmVisualizer";
  import VisualizationLayout from "../Visualisation/VisualizationLayout";

  const Bubble = () => {
    return (
      <div >
      <AlgorithmVisualizer
        title="Bubble Sort"
        getSteps={getBubbleSortSteps}
        renderHeader={() => (
          <AlgorithmInfo
            title="Bubble Sort"
            description="Bubble Sort repeatedly compares adjacent elements and swaps them when they are in the wrong order.
  It is simple but very slow for large lists due to many repeated comparisons."
            time="O(n²)"
            space="O(1)"
            category="Sorting"
            difficulty="Easy"
            
          />
        )}
        renderLayout={(array, activeIndexes, ranges) => (
          <VisualizationLayout
            array={array}
            activeIndexes={activeIndexes}
            ranges={ranges}   // ← IMPORTANT (Bubble Sort will send empty array)
            pseudocode={<BubbleSortPseudocode />}
          />
      )}
      
      />

      </div>
    );
  };

  export default Bubble;
