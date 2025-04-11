import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RecipeSection from './components/RecipeSection';
import Footer from './components/Footer';

function App() {
  const [recipes, setRecipes] = useState({
    summer: [
      { id: 1, title: 'Italian-style tomato', image: 'https://images.unsplash.com/photo-1608044526987-a1bf59e8ba37', time: '25 minutes' },
      { id: 2, title: 'Spaghetti with vegetables', image: 'https://images.unsplash.com/photo-1627042633145-b780d842ba0a', time: '35 minutes' },
      { id: 3, title: 'Lotus delight salad', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c', time: '15 minutes' },
      { id: 4, title: 'Snack cakes', image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce', time: '20 minutes' },
    ],
    videos: [
      { id: 1, title: 'Salad with cabbage and shrimp', image: 'https://images.unsplash.com/photo-1625944525533-473f1a3d51e0', time: '15 minutes' },
      { id: 2, title: 'Salad of cave beans, shrimp and potatoes', image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74', time: '20 minutes' },
      { id: 3, title: 'Sunny-side up fried egg', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8', time: '5 minutes' },
      { id: 4, title: 'Lotus delight salad', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd', time: '15 minutes' },
    ],
    editorsPick: [
      { id: 1, title: 'Stuffed sticky rice ball', image: 'https://images.unsplash.com/photo-1630914341512-6ca9ab0aace1', time: '45 minutes', author: 'Jennifer King', description: 'Stuffed sticky rice ball: A delightful Asian treat with chewy, glutinous rice and a flavorful surprising...' },
      { id: 2, title: 'Strawberry smoothie', image: 'https://images.unsplash.com/photo-1553530666-ba11a90bb680', time: '10 minutes', author: 'Matthew Martinez', description: 'Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend is...' },
      { id: 3, title: 'Latte Art', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772', time: '10 minutes', author: 'Sarah Hill', description: 'Latte art is the skillful craft of creating captivating designs on the surface of lattes.' },
      { id: 4, title: 'Butter fried noodles', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246', time: '15 minutes', author: 'Julie Lopez', description: 'Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal.' },
    ]
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <RecipeSection 
          title="This Summer Recipes" 
          subtitle="We have all your Independence Day sweets covered." 
          recipes={recipes.summer} 
        />
        <RecipeSection 
          title="Recipes With Videos" 
          subtitle="Cooking Up Culinary Creations with Step-by-Step Videos" 
          recipes={recipes.videos} 
        />
        <RecipeSection 
          title="Editor's pick" 
          subtitle="Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!" 
          recipes={recipes.editorsPick} 
          showAuthor={true}
          showDescription={true}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;