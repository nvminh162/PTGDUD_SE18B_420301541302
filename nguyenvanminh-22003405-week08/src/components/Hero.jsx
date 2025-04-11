function Hero() {
    return (
      <section className="relative py-8 bg-cover bg-center" style={{ backgroundImage: "url('/images/kitchen-bg.jpg')" }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
                <div className="bg-yellow-400 text-xs inline-block px-3 py-1 rounded-full font-medium mb-3">Recipe of the day</div>
                <h2 className="text-2xl font-bold text-pink-500 mb-2">Salad Caprese</h2>
                <p className="text-gray-700 mb-4">
                  Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
                </p>
                <div className="flex items-center mb-4">
                  <div className="bg-pink-100 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Salad Caprese</span>
                </div>
                <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg inline-flex items-center">
                  View now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Hero;