import { useState, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/organisms/Navbar'
import './App.css'


function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const inputField = useRef<HTMLInputElement>(null);
  const [savedItems, setSavedItems] = useState<string[]>(['Pizza', 'Burger', 'Salad']);

  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Search query:', searchQuery);
  };

  return (
    <Router>
      <div className="App">
        <Navbar
          searchHandler={searchHandler}
          inputField={inputField}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          savedItems={savedItems}
        />
        <div className="container mx-auto mt-8">
          <h1 className="text-2xl font-bold">Welcome to FlavorFlex</h1>
          <p className="mt-4">This is a dummy content area to show the Navbar in context.</p>
        </div>
      </div>
    </Router>
  );
};

export default App;