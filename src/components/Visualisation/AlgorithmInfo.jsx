const AlgorithmInfo = ({ title, description, time, space, category, difficulty }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-2xl mb-8">
      
      <h1 className="text-2xl text-black font-bold mb-3">{title}</h1>

      <p className="text-gray-700 mb-6 leading-relaxed">
        {description}
      </p>  

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

        <div className="bg-gray-100 p-3 rounded-lg">
          <h4 className="text-sm text-gray-500">Time Complexity</h4>
          <p className="font-bold text-blue-500">{time}</p>
        </div>

        <div className="bg-gray-100 p-3 rounded-lg">
          <h4 className="text-sm text-gray-500">Space Complexity</h4>
          <p className="font-bold text-blue-500">{space}</p>
        </div>

        <div className="bg-gray-100 p-3 rounded-lg">
          <h4 className="text-sm text-gray-500">Category</h4>
          <p className="font-bold text-blue-500">{category}</p>
        </div>

        <div className="bg-gray-100 p-3 rounded-lg">
          <h4 className="text-sm text-gray-500">Difficulty</h4>
          <p className="font-bold text-green-600">{difficulty}</p>
        </div>

     
      </div>
    </div>
  );
};

export default AlgorithmInfo;
