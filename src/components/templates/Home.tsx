import React from 'react';
import FryingPan from "../molecules/FryingPan";

interface HomeProps {
  recipes: string[];
  loading: boolean;
  error: string | null;
}

const Home: React.FC<HomeProps> = ({ recipes, loading, error }) => {
  return (
    <div className="home container mx-auto py-10 flex flex-wrap gap-10 justify-center">
      {!loading && !error && recipes.length === 0 ? (
        <div>
          <p className="text-2xl lg:text-4xl font-semibold text-rose-300">
            Nothing to show, please search something!
          </p>
          <FryingPan />
        </div>
      ) : null}

      {loading && <p>{error ? error : "loading...."}</p>}

      {recipes.length > 0 && (
        <div className="w-full text-center">
          <p className="text-2xl font-semibold mb-4">
            Found {recipes.length} recipe(s)
          </p>
          <p className="text-lg text-gray-600">
            This is a placeholder for the recipe list. Each recipe would be displayed here.
          </p>
          <ul className="mt-4 list-disc list-inside">
            {recipes.map((recipe, index) => (
              <li key={index} className="text-lg text-gray-700">
                Recipe {index + 1}: {recipe}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;