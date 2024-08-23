import React from 'react';
import FryingPan from "../molecules/FryingPan";
import Recipe from '../organisms/Recipe';
import RecipeType from '../../types/RecipeType';

interface HomeProps {
  recipes: RecipeType[];
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

      {recipes.length > 0 && recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
    </div>
  );
};

export default Home;