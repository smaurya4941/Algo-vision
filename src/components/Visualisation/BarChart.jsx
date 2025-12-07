// const BarChart = ({ array, activeIndexes }) => {
//   const maxValue = Math.max(...array, 1);

//   return (
//     <div className="flex items-end justify-center h-64 gap-2">
//       {array.map((  value, index) => {
//         const isActive = activeIndexes.includes(index);
//         const height = (value / maxValue) * 100;

//         return (
//           <div
//             key={index}
//             className={`relative flex items-center justify-center w-8 transition-all duration-300 ${
//               isActive ? "bg-red-500" : "bg-blue-500"
//             }`}
//             style={{ height: `${height}%` }}
//           >
//             <span className="absolute -top-5 text-xs text-black font-bold">{value}</span>

//           </div>
//         );
//       })}
//     </div>
//   );
// };


// export default BarChart;

const BarChart = ({ array, activeIndexes, ranges }) => {
  const maxValue = Math.max(...array, 1);

  // --------------------------
  // COLOR LOGIC FOR ALGORITHMS
  // --------------------------
  const getColor = (index) => {
    // 🔴 1. Active index highlight (compare/swaps)
    if (activeIndexes.includes(index)) {
      return "bg-red-500";
    }

    // 🟦🟪🟩🟧 2. Range-based highlighting (merge sort, quick sort, binary search)
    if (ranges && ranges.length > 0) {
      for (let r of ranges) {
        if (index >= r.start && index <= r.end) {

          // Merge Sort Types
          if (r.type === "left") return "bg-blue-400";
          if (r.type === "right") return "bg-purple-400";
          if (r.type === "merge") return "bg-green-400";
          if (r.type === "split") return "bg-orange-400";

          // Quick Sort Types
          if (r.type === "pivot") return "bg-yellow-400";

          // Binary Search Types
          if (r.type === "low") return "bg-blue-500";
          if (r.type === "mid") return "bg-yellow-500";
          if (r.type === "high") return "bg-purple-500";
          if (r.type === "found") return "bg-green-600";

          // Generic search range
          if (r.type === "search") return "bg-blue-300";
        }
      }
    }

    // 🔵 Default color (normal bar)
    return "bg-blue-500";
  };

  return (
    <div className="flex items-end justify-center h-[80%] gap-2">
      {array.map((value, index) => {
        const height = (value / maxValue) * 100;

        return (
          <div
            key={index}
            className={`relative flex items-center justify-center w-8 transition-all duration-300 ${getColor(index)}`}
            style={{ height: `${height}%` }}
          >
            <span className="absolute -top-5 text-xs text-black font-bold">
              {value}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default BarChart;
