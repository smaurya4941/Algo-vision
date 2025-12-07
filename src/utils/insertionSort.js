export function getInsertionSortSteps(array) {
    let steps = [];
    let arr = [...array];
  
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
  
      // Mark the element selected for insertion
      steps.push({
        type: "select",
        index: i,
        array: [...arr],
      });
  
      // Shift elements that are greater than key
      while (j >= 0) {
        
        // Record comparison
        steps.push({
          type: "compare",
          indices: [j, j + 1],
          array: [...arr],
        });
  
        if (arr[j] > key) {
          // Shift element to the right
          arr[j + 1] = arr[j];
  
          steps.push({
            type: "shift",
            from: j,
            to: j + 1,
            array: [...arr],
          });
  
          j--;
        } else {
          // No more shifting required
          break;
        }
      }
  
      // Insert the key into its correct position
      arr[j + 1] = key;
  
      steps.push({
        type: "insert",
        index: j + 1,
        value: key,
        array: [...arr],
      });
  
      // End of each outer loop pass
      steps.push({
        type: "pass-end",
        pass: i,
        array: [...arr],
      });
    }
  
    return steps;
  }
  