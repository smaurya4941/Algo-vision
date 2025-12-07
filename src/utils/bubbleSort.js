export function getBubbleSortSteps(array) {
    let steps = [];
    let arr = [...array];
  

    //steps me hum comparison aur swap dono ko record karenge Isme objects store honge jisme type, indices aur current array state hogi
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
  
        // Record comparison ==>iski wajah se hume pata chalega ki konsa element compare hua hain aur animation me dikhayenge
        steps.push({
          type: "compare",
          indices: [j, j + 1],
          array: [...arr],
        });
  
        if (arr[j] > arr[j + 1]) {
          // Swap
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  
          // Record swap ==>iski wajah se hume pata chalega ki konsa element swap hua hain
          steps.push({
            type: "swap",
            indices: [j, j + 1],
            array: [...arr],
          });
        }
      }
      // Record end of pass after each outer loop iteration
      steps.push({
        type: "pass-end",
        pass: i,
        array: [...arr],
      });
    }
    return steps;
  }
  