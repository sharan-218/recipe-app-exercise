import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/recipes" element={<Recipe />} />
      </Routes>
    </Router>
  );
}

export default App;
