// import BarChart from "./BarChart";

// const VisualizationLayout = ({ array, activeIndexes, pseudocode }) => {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

//       {/* Bars Section */}
//       <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
//         <BarChart array={array} activeIndexes={activeIndexes} />
//       </div>

//       {/* Pseudocode Section */}
//       <div className="bg-white p-6 rounded-xl shadow">
//         <h2 className="text-lg  text-neutral-800 font-bold mb-3">Pseudocode</h2>
//         <pre className="text-sm text-gray-8 00 whitespace-pre-wrap leading-relaxed">
// {pseudocode}  
//         </pre>
//       </div>

//     </div>
//   );
// };

// export default VisualizationLayout;




import BarChart from "./BarChart";

const VisualizationLayout = ({ array, activeIndexes, ranges, pseudocode }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

      {/* Bars Section */}
      <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
        <BarChart 
          array={array} 
          activeIndexes={activeIndexes}
          ranges={ranges}
        />
      </div>

      {/* Pseudocode Section */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg text-neutral-800 font-bold mb-3">Pseudocode</h2>
        <pre className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed">
{pseudocode}
        </pre>
      </div>

    </div>
  );
};

export default VisualizationLayout;
