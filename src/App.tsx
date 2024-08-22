import React, { useState, useRef } from 'react';
import Navbar from './components/organisms/Navbar'
import Footer from './components/organisms/Footer';
import Home from './components/templates/Home';
import RecipeType from './types/RecipeType';

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const inputField = useRef<HTMLInputElement>(null);
  const [savedItems] = useState<string[]>(['Pizza', 'Burger', 'Salad']);
  
  // New state for recipes, loading, and error
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    getData(searchQuery);

    setSearchQuery("");
    setRecipes([]);
    setError("");
  };

  const getData = async (searchQuery: string) => {
    try {
      setLoading(true);
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchQuery}`);
      
      if (!res.ok) {
        throw new Error("Something went wrong, please try again later.");
      }

      const data = await res.json();
      
      if (data.results === 0) {
        throw new Error("No recipe found!");
      }
      
      setRecipes(data?.data?.recipes);
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="app min-h-screen bg-rose-50 text-gray-600 text-lg">
      <Navbar
        searchHandler={searchHandler}
        inputField={inputField}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        savedItems={savedItems}
      />
      <main className="flex-grow">
        <Home
          recipes={recipes}
          loading={loading}
          error={error}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;