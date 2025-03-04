import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../types";
import Hero from "../components/Hero";

const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const NUMBER_OF_RECIPES = 5; // Number of random recipes to display

  useEffect(() => {
    const fetchRandomMeals = async () => {
      const randomRecipes: Recipe[] = [];

      for (let i = 0; i < NUMBER_OF_RECIPES; i++) {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        const data = await response.json();
        if (data.meals) {
          randomRecipes.push(data.meals[0]); // Add the first meal from the response
        }
      }

      setRecipes(randomRecipes);
    };

    fetchRandomMeals();
  }, []);

  return (
    <div className="container mx-auto p-6 text-center">
      <Hero /> {/* Hero Section */}
      <h1 className="text-3xl font-bold mt-8">Taste the World</h1>
      <p className="text-lg text-gray-600 mt-2">
        Explore a variety of hand-picked dishes from around the world. Try
        something new every day!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {recipes.map((recipe) => (
          <div key={recipe.idMeal} className="border rounded-lg p-4 shadow-md">
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
        ))}
      </div>
    </div>
  );
};

export default Home;
