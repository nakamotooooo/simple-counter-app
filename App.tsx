import React, { useState, useCallback } from 'react';

const App: React.FC = () => {
  // State to hold and manage the counter's value.
  const [count, setCount] = useState<number>(0);

  // Memoized callback function to increment the count.
  const incrementCount = useCallback(() => {
    // We use a functional update to ensure we're always working with the latest state.
    setCount(c => c + 1);
  }, []);

  // Memoized callback function to reset the count to zero.
  const resetCount = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <main className="bg-slate-900 text-white min-h-screen flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md backdrop-blur-sm p-8 md:p-12 rounded-2xl text-center transform transition-all duration-300">
            
        <div className="flex flex-col items-center gap-y-6">
          
          
          <div 
            className="text-7xl md:text-8xl font-mono font-extrabold p-4 rounded-lg  w-48 text-center shadow-inner text-white tracking-wider"
            aria-live="polite"
          >
            {count}
          </div>
          
          <div className="w-full flex flex-col sm:flex-row gap-4 mt-2">
            
            
            
            <button
              onClick={incrementCount}
              className="flex-1 px-6 py-3 bg-cyan-500 text-slate-900 font-bold text-lg rounded-lg shadow-lg hover:bg-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-300/50 transform hover:-translate-y-1 transition-all duration-300 ease-in-out active:scale-95"
              aria-label="Increment count"
            >
              Increment
            </button>
            
            
            
            <button
              onClick={resetCount}
              className="flex-1 px-6 py-3 bg-slate-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-slate-500 focus:outline-none focus:ring-4 focus:ring-slate-400/50 transform hover:-translate-y-1 transition-all duration-300 ease-in-out active:scale-95"
              aria-label="Reset count"
            >
              Reset
            </button>


          </div>
        </div>
      </div>

      <footer className="absolute bottom-5 text-center text-slate-500 text-sm">
        <p>Built with React, TypeScript, and Tailwind CSS.</p>
      </footer>
    </main>
  );
};

export default App;
