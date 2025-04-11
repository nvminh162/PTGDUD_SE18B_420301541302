import RecipeCard from './RecipeCard';

function RecipeSection({ title, subtitle, recipes, showAuthor = false, showDescription = false }) {
  return (
    <section className="py-10 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-pink-500 mb-2">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map(recipe => (
            <RecipeCard 
              key={recipe.id} 
              recipe={recipe} 
              showAuthor={showAuthor}
              showDescription={showDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecipeSection;