export function getQuickSortSteps(array) {
    let steps = [];
    let arr = [...array];
  
    // Utility to push steps
    function addStep(type, data = {}) {
      steps.push({
        type,
        ...data,
        array: [...arr],
      });
    }
  
    function quickSort(start, end) {
      if (start >= end) return;
  
      // Mark the current recursion range
      addStep("split", {
        ranges: [
          { type: "split", start, end }
        ]
      });
  
      let pivotIndex = partition(start, end);
  
      // Recursively sort left half
      quickSort(start, pivotIndex - 1);
  
      // Recursively sort right half
      quickSort(pivotIndex + 1, end);
    }
  
    function partition(start, end) {
      let pivot = arr[end];
      let i = start - 1;
  
      // Show pivot
      addStep("pivot", {
        pivotIndex: end,
        ranges: [
          { type: "pivot", start: end, end: end },
          { type: "split", start, end }
        ]
      });
  
      for (let j = start; j < end; j++) {
  
        // Compare j with pivot
        addStep("compare", {
          indices: [j, end],
          ranges: [
            { type: "pivot", start: end, end: end },
            { type: "left", start, end: end - 1 }
          ]
        });
  
        if (arr[j] < pivot) {
          i++;
  
          // Swap arr[i] and arr[j]
          [arr[i], arr[j]] = [arr[j], arr[i]];
  
          addStep("swap", {
            indices: [i, j],
            ranges: [
              { type: "pivot", start: end, end: end },
              { type: "merge", start, end: end - 1 }
            ]
          });
        }
      }
  
      // Swap pivot into correct position
      [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
  
      addStep("pivot-swap", {
        indices: [i + 1, end],
        ranges: [
          { type: "pivot", start: end, end: end },
          { type: "merge", start, end: end }
        ]
      });
  
      return i + 1;
    }
  
    quickSort(0, arr.length - 1);
    return steps;
  }
  