const Loading = () => {
  return (
    // Your Custom Loader - Exact design preserved
    <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center">
      {/* Animated Circle with MA */}
      <div className="relative mb-6">
        {/* Spinning circle border - partial */}
        <svg className="w-32 h-32 animate-spin" style={{ animationDuration: '1.5s' }} viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="3"
            strokeDasharray="70 200"
            strokeLinecap="round"
          />
        </svg>
        
        {/* Center circle with MA letter */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center shadow-sm">
            <span className="text-sky-500 text-3xl font-normal" style={{ fontFamily: 'Arial, sans-serif' }}>MA</span>
          </div>
        </div>
      </div>

      {/* Name */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-1">
        Muhammad Aamir
      </h1>

      {/* Title */}
      <p className="text-sm text-gray-500 mb-6">
        Full-Stack Developer
      </p>

      {/* Three dots loading - bouncing up and down */}
      <div className="flex gap-1.5 h-8 items-center">
        <div 
          className="w-2 h-2 rounded-full bg-sky-400" 
          style={{ 
            animation: 'bounce 0.6s infinite',
            animationDelay: '0s'
          }}
        ></div>
        <div 
          className="w-2 h-2 rounded-full bg-sky-400" 
          style={{ 
            animation: 'bounce 0.6s infinite',
            animationDelay: '0.15s'
          }}
        ></div>
        <div 
          className="w-2 h-2 rounded-full bg-sky-400" 
          style={{ 
            animation: 'bounce 0.6s infinite',
            animationDelay: '0.3s'
          }}
        ></div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
