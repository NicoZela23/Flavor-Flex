import { Link, useParams } from "react-router-dom";
import { useRecipe } from "../../hooks/useRecipe";
import RecipePageType from "../../types/RecipePageType";
import Ingredient from "../../types/Ingredient";
import { useEffect, useState } from "react";
import RecipeCardType from "../../types/RecipeCardType";

interface RecipePageProps {
  favouriteHandler: (id: string) => void;
  savedRecipes: RecipeCardType[];
}

const RecipePage: React.FC<RecipePageProps> = ({ favouriteHandler, savedRecipes }) => {
  const [recipeSavedStatus, setRecipeSavedStatus] = useState<boolean | null>(null);
  const { id } = useParams() as { id: string };

  const { data: recipe } = useRecipe(id) as { data: RecipePageType };

  const durationCalc = (duration: number) => {
    if (!duration) return;

    if (String(duration).includes(".")) {
      const splittedDuration = String(duration).split(".");
      const hour = splittedDuration[0] + "h";
      const splitterMinutes = "." + splittedDuration[1];
      const minutes = +splitterMinutes * 60 + "min";

      return hour + minutes;
    } else {
      return duration + "h";
    }
  };

  useEffect(() => {
    if (!recipe) return;

    setRecipeSavedStatus(savedRecipes.some((item) => item.id === recipe.id));
  }, [recipe]);

  return (
    <div className="recipe-item-section container mx-auto py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="left row-start-2 lg:row-start-auto">
        <div className="img overflow-hidden rounded-xl border shadow-md group">
          <img
            src={recipe?.image_url}
            alt={recipe?.title}
            className="h-full w-full object-cover group-hover:scale-105 duration-300"
          />
        </div>
        <div className="ings mt-10">
          <span className="ing-title text-3xl font-medium mb-5 inline-block">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-2">
            {recipe?.ingredients?.map((ing: Ingredient, i) => (
              <li key={i}>
                ✓ {ing.quantity}
                {ing.unit} {ing.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right flex flex-col gap-5">
        <span className="publisher uppercase tracking-widest font-semibold text-sky-400">
          {recipe?.publisher}
        </span>
        <h2 className="title text-5xl">{recipe?.title}</h2>
        <div className="servings-cooking-time flex gap-5 uppercase tracking-widest font-semibold text-rose-500">
          <div className="servings">Servings: {recipe?.servings} people</div>
          <div className="cooking-time">
            Cooking time:{" "}
            {recipe?.cooking_time < 60
              ? String(recipe?.cooking_time) + "min"
              : durationCalc(recipe?.cooking_time / 60)}
          </div>
        </div>
        <div className="btns flex gap-5">
          <button
            onClick={() => favouriteHandler(recipe?.id)}
            className={`bg-gradient-to-br p-3 px-8 rounded-lg text-xs uppercase font-medium tracking-wider mt-2 inline-block shadow-md hover:shadow-lg  duration-300 ${
              recipeSavedStatus
                ? "from-orange-400 to-orange-600 text-orange-50 shadow-orange-200 hover:shadow-orange-300"
                : "from-sky-400 to-sky-600 text-sky-50 shadow-sky-200 hover:shadow-sky-300"
            }`}
          >
            {recipeSavedStatus
              ? "- Remove from favourites"
              : "+ Save as favourite"}
          </button>
          <a
            href={recipe?.source_url}
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-br from-purple-400 to-purple-600 text-purple-50 p-3 px-8 rounded-lg text-xs uppercase font-medium tracking-wider mt-2 inline-block shadow-md shadow-purple-200 hover:shadow-lg hover:shadow-purple-300 duration-300"
          >
            Get directions
          </a>
          <Link
            to="/"
            className="bg-gradient-to-br from-rose-400 to-rose-600 text-rose-50 p-3 px-8 rounded-lg text-xs uppercase font-medium tracking-wider mt-2 inline-block shadow-md shadow-rose-200 hover:shadow-lg hover:shadow-rose-300 duration-300"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;