import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../types";

const RecipePage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchAllRecipes = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      const data = await response.json();
      if (data.meals) {
        setRecipes(data.meals);
      }
    };

    fetchAllRecipes();
  }, []);

  // Filter recipes based on search input
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold">Find Your Favorite Recipe</h1>
      <p className="text-lg text-gray-600 mt-2">
        Search for delicious meals and explore new flavors!
      </p>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search recipes..."
        className="mt-4 p-2 border rounded-md w-full md:w-1/2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Recipe List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div
              key={recipe.idMeal}
              className="border rounded-lg p-4 shadow-md"
            >
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h2 className="text-lg font-semibold mt-2">{recipe.strMeal}</h2>
              <p className="text-sm text-gray-500">
                {recipe.strCategory} - {recipe.strArea}
              </p>
              <Link
                to={`/recipe/${recipe.idMeal}`}
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                View Recipe
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg mt-4">No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default RecipePage;
