import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchRecipeById } from "../api/recipeApi";
import { Recipe } from "../types";

const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getRecipe = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const data = await fetchRecipeById(id);
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    };
    getRecipe();
  }, [id]);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (!recipe)
    return <p className="text-center text-red-500">Recipe not found.</p>;

  // Extract ingredients & measurements dynamically
  const ingredients = Array.from({ length: 20 }, (_, i) => i + 1)
    .map((i) => {
      const ingredient = recipe[`strIngredient${i}` as keyof Recipe];
      const measure = recipe[`strMeasure${i}` as keyof Recipe];
      return ingredient && measure ? `${ingredient} - ${measure}` : null;
    })
    .filter(Boolean);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{recipe.strMeal}</h1>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="rounded-lg mt-4 w-full max-w-md"
      />

      <h2 className="text-lg font-semibold mt-4">
        Category: {recipe.strCategory}
      </h2>
      <h3 className="text-lg mt-2">Cuisine: {recipe.strArea}</h3>

      <h3 className="text-lg font-semibold mt-4">Instructions:</h3>
      <p className="mt-2 whitespace-pre-line">{recipe.strInstructions}</p>

      <h3 className="text-lg font-semibold mt-4">Ingredients:</h3>
      <ul className="list-disc list-inside mt-2">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      {recipe.strYoutube && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Watch on YouTube:</h3>
          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {recipe.strYoutube}
          </a>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
