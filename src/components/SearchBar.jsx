import { Search } from "lucide-react";
import { usePost } from "@/hooks/usePost";

function SearchBar({ currentAuthor, onCurrentAuthor, postData }) {
  // const { users, search, setSearch } = usePost();
  const { users, search, setSearch, setCurrentAuthor } = postData;

  return (
    <div className="py-4.5  px-4 w-full  flex gap-4 items-center justify-between bg-white/60 backdrop-blur-lg">
      <div className="search-input flex gap-4 bg-white rounded-4xl py-2 px-4 w-2/3">
        <Search size={22} />
        <input
          type="text"
          placeholder="Search for a post..."
          className="border-none outline-none text-mg opacity-50"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>

      <div className="author flex ite ms-center gap-2">
        <p className="text-[14px] font-normal text-black ">Author:</p>
        <select
          name="user"
          className="bg-white py-2 px-7 rounded-lg outline-none text-black"
          value={currentAuthor}
          onChange={(e) => setCurrentAuthor(Number(e.target.value))}
        >
          <option value="0">All</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
