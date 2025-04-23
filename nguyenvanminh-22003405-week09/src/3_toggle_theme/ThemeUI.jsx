import React from 'react';

function ThemeUI({ theme, toggleTheme }) {
  return (
    <div className={`p-6 transition-all duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' 
        : 'bg-gradient-to-br from-white to-gray-100 text-gray-900'
    }`}>
      <div className="max-w-md mx-auto">
        <div className={`p-8 rounded-2xl shadow-xl transition-all duration-500 ${
          theme === 'dark' 
            ? 'bg-gray-800 shadow-gray-700/20' 
            : 'bg-white shadow-gray-200/60'
        }`}>
          <div className="flex justify-center mb-8">
            {theme === 'dark' ? (
              <div className="h-24 w-24 bg-gray-800 rounded-full shadow-inner flex items-center justify-end p-1 border-4 border-gray-700">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 shadow-lg"></div>
              </div>
            ) : (
              <div className="h-24 w-24 bg-blue-400 rounded-full shadow-inner flex items-center justify-start p-1 border-4 border-yellow-300">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-400 shadow-lg"></div>
              </div>
            )}
          </div>

          <h1 className={`text-3xl font-bold mb-4 text-center ${
            theme === 'dark' 
              ? 'text-blue-300' 
              : 'text-blue-600'
          }`}>Theme Switcher</h1>
          
          <p className={`mb-6 text-center ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Current theme: <span className="font-bold">{theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
          </p>
          
          <div className="relative">
            <label htmlFor="theme-toggle" className="flex items-center cursor-pointer justify-center">
              <span className="mr-4 text-sm">Light</span>
              <div className="relative">
                <input 
                  id="theme-toggle" 
                  type="checkbox" 
                  className="sr-only" 
                  onChange={toggleTheme} 
                  checked={theme === 'dark'}
                />
                <div className={`block w-14 h-8 rounded-full transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-blue-600' : 'bg-gray-300'
                }`}></div>
                <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${
                  theme === 'dark' ? 'transform translate-x-6' : ''
                }`}></div>
              </div>
              <span className="ml-4 text-sm">Dark</span>
            </label>
          </div>
          
          <div className="mt-10">
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-700 text-gray-200' 
                  : 'bg-gray-100 text-gray-700'
              }`}>
                <h3 className="font-medium mb-2">Sample Content</h3>
                <p className="text-sm">This is how your content looks in {theme} mode.</p>
              </div>
              <div className={`p-4 rounded-lg transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-700 text-blue-300' 
                  : 'bg-gray-100 text-blue-600'
              }`}>
                <h3 className="font-medium mb-2">Accent Colors</h3>
                <p className="text-sm">Colors adapt based on your selected theme.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeUI;