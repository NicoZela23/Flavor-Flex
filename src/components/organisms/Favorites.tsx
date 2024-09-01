import RecipeCardType from "../../types/RecipeCardType";
import RecipeCard from "./RecipeCard";

interface FavoritesProps {
  savedRecipes: RecipeCardType[];
}

const Favourites: React.FC<FavoritesProps> = ({ savedRecipes }) => {
  return (
    <div className="favourite-section">
      {savedRecipes.length === 0 && (
        <p className="text-2xl lg:text-4xl font-semibold text-rose-300 text-center pt-10">
          Favourite list is empty!
        </p>
      )}

      <div className="favourite-items-container container mx-auto py-10 flex flex-wrap gap-10 justify-center">
        {savedRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
