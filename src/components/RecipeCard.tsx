import { Card, CardContent } from "../components/ui/card";
import { Link } from "react-router-dom";
import { Recipe } from "../types";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <Card className="hover:shadow-lg transition-all">
      <CardContent className="p-4">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="rounded-lg w-full h-40 object-cover"
        />
        <h2 className="text-lg font-semibold mt-2">{recipe.strMeal}</h2>
        <Link
          to={`/recipe/${recipe.idMeal}`}
          className="text-blue-500 hover:underline"
        >
          View Details
        </Link>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
