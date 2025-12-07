export function getMergeSortSteps(array) {
    let steps = [];
    let arr = [...array];
  
    function addStep(type, data = {}) {
      steps.push({
        type,
        ...data,
        array: [...arr],
      });
    }
  
    function mergeSort(start, end) {
      if (start >= end) return;
  
      const mid = Math.floor((start + end) / 2);
  
      // SPLIT visualization
      addStep("split", {
        ranges: [
          { type: "split", start, end },
          { type: "left", start, end: mid },
          { type: "right", start: mid + 1, end },
        ],
      });
  
      mergeSort(start, mid);
      mergeSort(mid + 1, end);
  
      merge(start, mid, end);
    }
  
    function merge(start, mid, end) {
      let left = arr.slice(start, mid + 1);
      let right = arr.slice(mid + 1, end + 1);
  
      let i = 0,
        j = 0,
        k = start;
  
      // MERGE START visualization
      addStep("merge-start", {
        ranges: [
          { type: "merge", start, end },
          { type: "left", start, end: mid },
          { type: "right", start: mid + 1, end },
        ],
      });
  
      while (i < left.length && j < right.length) {
        // Compare
        addStep("compare", {
          indices: [start + i, mid + 1 + j],
          ranges: [
            { type: "merge", start, end },
            { type: "left", start, end: mid },
            { type: "right", start: mid + 1, end },
          ],
        });
  
        if (left[i] <= right[j]) {
          arr[k] = left[i];
  
          addStep("overwrite", {
            index: k,
            value: left[i],
            ranges: [
              { type: "merge", start, end },
              { type: "left", start, end: mid },
              { type: "right", start: mid + 1, end },
            ],
          });
  
          i++;
        } else {
          arr[k] = right[j];
  
          addStep("overwrite", {
            index: k,
            value: right[j],
            ranges: [
              { type: "merge", start, end },
              { type: "left", start, end: mid },
              { type: "right", start: mid + 1, end },
            ],
          });
  
          j++;
        }
        k++;
      }
  
      // leftover left side
      while (i < left.length) {
        arr[k] = left[i];
  
        addStep("overwrite", {
          index: k,
          value: left[i],
          ranges: [{ type: "merge", start, end }],
        });
  
        i++;
        k++;
      }
  
      // leftover right side
      while (j < right.length) {
        arr[k] = right[j];
  
        addStep("overwrite", {
          index: k,
          value: right[j],
          ranges: [{ type: "merge", start, end }],
        });
  
        j++;
        k++;
      }
    }
  
    mergeSort(0, arr.length - 1);
    return steps;
  }
  