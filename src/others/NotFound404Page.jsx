import { useNavigate } from "react-router-dom";

const NotFound404Page = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0e1525] flex flex-col items-center justify-center text-center p-6">

      {/* BIG 404 TEXT */}
      <h1 className="text-[120px] font-extrabold text-white tracking-widest drop-shadow-lg animate-pulse">
        404
      </h1>

      {/* Subheading */}
      <h2 className="text-3xl text-gray-300 font-semibold mb-4">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
        The page you are trying to reach doesn’t exist or might have been moved.
        Don’t worry—let’s get you back on track! 
      </p>

      {/* Animated loader */}
      <div className="mb-10">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>

      {/* Go Back Button */}
      <button
        onClick={() => navigate("/")}
        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition-all text-white rounded-lg text-lg shadow-lg shadow-blue-500/30"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound404Page;
