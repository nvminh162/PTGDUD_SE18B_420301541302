function Header() {
    return (
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-pink-500 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-pink-500">Chefly</h1>
          </div>
          
          <div className="relative mx-4 flex-grow max-w-md hidden sm:block">
            <input 
              type="text" 
              className="w-full rounded-full border border-gray-300 pl-10 pr-4 py-1 text-sm"
              placeholder="What would you like to cook?"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          
          <nav className="hidden md:flex space-x-5">
            <a href="#" className="text-gray-600 hover:text-pink-500">What to cook</a>
            <a href="#" className="text-gray-600 hover:text-pink-500">Recipes</a>
            <a href="#" className="text-gray-600 hover:text-pink-500">Ingredients</a>
            <a href="#" className="text-gray-600 hover:text-pink-500">Occasions</a>
            <a href="#" className="text-gray-600 hover:text-pink-500">About Us</a>
          </nav>
          
          <div className="flex items-center space-x-2">
            <button className="px-4 py-1 text-pink-500 rounded hover:text-pink-600">Login</button>
            <button className="px-4 py-1 bg-pink-500 text-white rounded hover:bg-pink-600">Subscribe</button>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;