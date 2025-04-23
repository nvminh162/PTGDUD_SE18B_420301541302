import React from 'react';

function CounterUI({ a, b, result, setA, setB, onIncrease, onDecrease }) {
  return (
    <div className="p-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Counter App</h2>
        <p className="text-gray-500 mt-2">Simple counter application with React</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Input Fields */}
        <div className="space-y-5">
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2 text-sm uppercase tracking-wide">Value A</label>
            <input
              type="number"
              value={a}
              onChange={(e) => setA(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2 text-sm uppercase tracking-wide">Value B</label>
            <input
              type="number"
              value={b}
              onChange={(e) => setB(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Result */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2 text-sm uppercase tracking-wide">Result</label>
            <input
              type="number"
              value={result}
              disabled
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 font-semibold text-center text-lg cursor-not-allowed"
            />
          </div>
        </div>

        {/* Buttons and Visualization */}
        <div className="flex flex-col justify-between">
          <div className="flex flex-col justify-center items-center h-32 bg-gray-50 rounded-xl mb-4 relative overflow-hidden">
            <div 
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 ease-in-out"
              style={{ height: `${Math.max(0, Math.min(100, (result / 100) * 100))}%` }}
            ></div>
            <span className="text-4xl font-bold z-10">{result}</span>
            <span className="text-sm text-gray-500 z-10">Current Value</span>
          </div>
          
          {/* Buttons */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <button
              onClick={onIncrease}
              className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Increase
            </button>
            <button
              onClick={onDecrease}
              className="bg-gradient-to-r from-rose-400 to-red-500 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
              Decrease
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterUI;