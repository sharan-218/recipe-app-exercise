import { Link } from "react-router-dom";
import bg from "../assets/bgExr.jpeg";
const Hero: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-center text-white px-6 w-full"
      style={{ backgroundImage: bg }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 max-w-3xl text-primary">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
          Discover Delicious Recipes from Around the World
        </h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow-md">
          Explore a variety of cuisines, from classic comfort food to exotic
          international dishes.
        </p>
        <Link to="/recipes">
          <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition">
            Explore Recipes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
