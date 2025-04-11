function RecipeCard({ recipe, showAuthor = false, showDescription = false }) {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative">
          <img 
            src={recipe.image} 
            alt={recipe.title}
            className="w-full h-48 object-cover"
          />
          <button className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <h3 className="font-medium text-gray-800 mb-1">{recipe.title}</h3>
          <div className="text-xs text-pink-500 mb-2">{recipe.time}</div>
          
          {showAuthor && recipe.author && (
            <div className="flex items-center mt-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-gray-200 mr-2"></div>
              <span className="text-sm font-medium">{recipe.author}</span>
            </div>
          )}
          
          {showDescription && recipe.description && (
            <p className="text-sm text-gray-600 mt-1">{recipe.description}</p>
          )}
        </div>
      </div>
    );
  }
  
  export default RecipeCard;