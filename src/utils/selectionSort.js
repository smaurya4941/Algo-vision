export function getSelectionSortSteps(array) {
    let steps = [];
    let arr = [...array];
  
    // Outer loop selects the position where the minimum should be placed
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
  
      // Compare current element with the rest of the elements
      for (let j = i + 1; j < arr.length; j++) {
  
        // Record comparison
        steps.push({
          type: "compare",
          indices: [minIndex, j],
          array: [...arr],
        });
  
        // Update minIndex if a smaller element is found
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
  
          // Record that we found a new minimum
          steps.push({
            type: "new-min",
            indices: [minIndex],
            array: [...arr],
          });
        }
      }
  
      // Swap the smallest element into the correct position
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  
        // Record swap
        steps.push({
          type: "swap",
          indices: [i, minIndex],
          array: [...arr],
        });
      }
  
      // After each pass, one element is in its final position
      steps.push({
        type: "pass-end",
        pass: i,
        array: [...arr],
      });
    }
  
    return steps;
  }
  