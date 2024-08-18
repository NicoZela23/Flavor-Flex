import React, { useState, useRef } from 'react';
import Navbar from './components/organisms/Navbar'
import Footer from './components/organisms/Footer';
import Home from './components/templates/Home';

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const inputField = useRef<HTMLInputElement>(null);
  const [savedItems, setSavedItems] = useState<string[]>(['Pizza', 'Burger', 'Salad']);
  
  // New state for recipes, loading, and error
  const [recipes, setRecipes] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Search query:', searchQuery);
    
    setLoading(true);
    setError(null);
    
    setTimeout(() => {
      if (searchQuery.trim() !== '') {
        setRecipes([`${searchQuery} Recipe 1`, `${searchQuery} Recipe 2`, `${searchQuery} Recipe 3`]);
      } else {
        setRecipes([]);
      }
      setLoading(false);
    }, 1000);
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