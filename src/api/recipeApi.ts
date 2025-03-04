import axios from "axios";
import { Recipe } from "../types";

const API_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchRecipes = async (query = ""): Promise<Recipe[]> => {
  try {
    const response = await axios.get<{ meals: Recipe[] | null }>(
      `${API_URL}/search.php?s=${query}`
    );
    return response.data.meals || []; // Return an empty array if no results
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

export const fetchRecipeById = async (id: string): Promise<Recipe | null> => {
  try {
    const response = await axios.get<{ meals: Recipe[] | null }>(
      `${API_URL}/lookup.php?i=${id}`
    );
    return response.data.meals ? response.data.meals[0] : null;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    return null;
  }
};

export const fetchRandomRecipe = async (): Promise<Recipe | null> => {
  try {
    const response = await axios.get<{ meals: Recipe[] | null }>(
      `${API_URL}/random.php`
    );
    return response.data.meals ? response.data.meals[0] : null;
  } catch (error) {
    console.error("Error fetching random recipe:", error);
    return null;
  }
};
export const fetchRecipesByName = async (name: string) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    const data = await res.json();
    return data.meals || [];
  } catch (error) {
    console.error("Failed to fetch recipes:", error);
    return [];
  }
};
