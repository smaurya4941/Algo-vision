export function getBinarySearchSteps(array, target) {
  let steps = [];
  let arr = [...array];

  function addStep(type, data = {}) {
    steps.push({
      type,
      ...data,
      array: [...arr],
    });
  }

  let low = 0;
  let high = arr.length - 1;

  // Initial full range
  addStep("range", {
    ranges: [{ type: "search", start: low, end: high }],
  });

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // Highlight low, mid, high
    addStep("compare", {
      indices: [mid],
      ranges: [
        { type: "low", start: low, end: low },
        { type: "mid", start: mid, end: mid },
        { type: "high", start: high, end: high },
      ],
    });

    if (arr[mid] === target) {
      addStep("found", {
        indices: [mid],
        ranges: [{ type: "found", start: mid, end: mid }],
      });
      return steps;
    }

    if (arr[mid] < target) {
      // Move right → fade left portion
      low = mid + 1;

      addStep("range", {
        ranges: [{ type: "search", start: low, end: high }],
      });
    } else {
      // Move left → fade right portion
      high = mid - 1;

      addStep("range", {
        ranges: [{ type: "search", start: low, end: high }],
      });
    }
  }

  // Not found
  addStep("not-found", {
    ranges: [{ type: "search", start: 0, end: arr.length - 1 }],
  });

  return steps;
}
