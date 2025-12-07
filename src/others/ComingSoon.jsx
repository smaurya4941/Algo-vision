const ComingSoon = () => {
    return (
      <div className="min-h-screen bg-[#0e1525] flex items-center justify-center p-6">
  
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10 max-w-md text-center animate-fadeIn">
  
          <h1 className="text-4xl font-bold text-white mb-4 tracking-wide">
            🚧 Coming Soon!
          </h1>
  
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Graph Algorithms like <span className="text-blue-400 font-semibold">BFS</span>,{" "}
            <span className="text-blue-400 font-semibold">DFS</span>,{" "}
            <span className="text-blue-400 font-semibold">Dijkstra</span>, and more
            are on their way!
          </p>
  
          <p className="text-gray-400 text-sm mb-8">
            We are working hard to bring amazing visualizations soon. Stay tuned! 💙
          </p>
  
          <div className="flex justify-center">
            <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
  
        </div>
  
      </div>
    );
  };
  
  export default ComingSoon;
  