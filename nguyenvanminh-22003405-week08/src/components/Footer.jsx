function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">About Us</h3>
              <p className="text-gray-300 text-sm mb-4">
                Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white text-black px-3 py-2 rounded-l text-sm w-full"
                />
                <button className="bg-pink-500 hover:bg-pink-600 px-3 py-2 rounded-r text-sm">
                  Send
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Learn More</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-pink-500">Our Cooks</a></li>
                <li><a href="#" className="hover:text-pink-500">See Our Features</a></li>
                <li><a href="#" className="hover:text-pink-500">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Shop</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-pink-500">Gift Subscription</a></li>
                <li><a href="#" className="hover:text-pink-500">Send Us Feedback</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Recipes</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-pink-500">What to Cook This Week</a></li>
                <li><a href="#" className="hover:text-pink-500">Pasta</a></li>
                <li><a href="#" className="hover:text-pink-500">Dinner</a></li>
                <li><a href="#" className="hover:text-pink-500">Healthy</a></li>
                <li><a href="#" className="hover:text-pink-500">Vegetarian</a></li>
                <li><a href="#" className="hover:text-pink-500">Vegan</a></li>
                <li><a href="#" className="hover:text-pink-500">Christmas</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="text-white mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-xl font-bold">Chefly</h2>
            </div>
            
            <div className="text-sm text-gray-400">
              <span className="mr-4">© 2023 Chefly Company</span>
              <span className="mr-4"><a href="#" className="hover:text-pink-500">Terms of Service</a></span>
              <span><a href="#" className="hover:text-pink-500">Privacy Policy</a></span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;