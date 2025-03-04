import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
  handleSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  search,
  setSearch,
  handleSearch,
}) => {
  return (
    <div className="flex items-center gap-4">
      <Input
        type="text"
        placeholder="Search for recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md"
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

export default SearchBar;
