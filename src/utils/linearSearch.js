export function getLinearSearchSteps(array, target) {
    let steps = [];
    let arr = [...array];
    

    if (target === null || target === undefined) {
        target = arr[0]; // default fallback
      }
    // Step utility
    function addStep(type, data = {}) {
      steps.push({
        type,
        ...data,
        array: [...arr],
      });
    }
  
    // Start search range (whole array)
    addStep("start", {
      ranges: [{ type: "search", start: 0, end: arr.length - 1 }],
    });
  
    for (let i = 0; i < arr.length; i++) {
  
      // Highlight current index
      addStep("compare", {
        indices: [i],
        ranges: [{ type: "search", start: 0, end: arr.length - 1 }],
      });
  
      if (arr[i] === target) {
        // Found the target
        addStep("found", {
          indices: [i],
          ranges: [{ type: "search", start: 0, end: arr.length - 1 }],
        });
  
        return steps;
      }
    }
  
    // Not found
    addStep("not-found", {
      ranges: [{ type: "search", start: 0, end: arr.length - 1 }],
    });
  
    return steps;
  }
  