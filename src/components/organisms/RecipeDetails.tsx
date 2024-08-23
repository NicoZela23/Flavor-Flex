import RecipeType from "../../types/RecipeType";

interface RecipeItemProps {
  recipe: RecipeType;
}

const RecipeItem : React.FC<RecipeItemProps>= ({ recipe }) => {  

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
      </div>
      <div className="right flex flex-col gap-5">
        <span className="publisher uppercase tracking-widest font-semibold text-sky-400">
          {recipe?.publisher}
        </span>
        <h2 className="title text-5xl">{recipe?.title}</h2>
        <div className="servings-cooking-time flex gap-5 uppercase tracking-widest font-semibold text-rose-500">
        </div>
        <div className="btns flex gap-5">
          <a
            href={recipe?.source_url}
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-br from-purple-400 to-purple-600 text-purple-50 p-3 px-8 rounded-lg text-xs uppercase font-medium tracking-wider mt-2 inline-block shadow-md shadow-purple-200 hover:shadow-lg hover:shadow-purple-300 duration-300"
          >
            Get directions
          </a>
          <p className="bg-gradient-to-br from-rose-400 to-rose-600 text-rose-50 p-3 px-8 rounded-lg text-xs uppercase font-medium tracking-wider mt-2 inline-block shadow-md shadow-rose-200 hover:shadow-lg hover:shadow-rose-300 duration-300">
            Back to home
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;