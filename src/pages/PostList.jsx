import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import AllPosts from "@/components/AllPosts";

import { ScrollText } from "lucide-react";
import { useNavigate } from "react-router-dom";

function PostList({ postData }) {
  // const [currentAuthor, setCurrentAuthor] = useState(0);
  const navigate = useNavigate();

  return (
    <section className="post-list">
      <Header>
        <div className="title flex items-center gap-2">
          <ScrollText />
          <h1> post list</h1>
        </div>
        <button
          className="text-[14px] cursor-pointer opacity-30 font-normal"
          onClick={() => navigate("/create")}
        >
          + Create a new post
        </button>
      </Header>
      <SearchBar postData={postData} />
      <AllPosts postData={postData} />
    </section>
  );
}

export default PostList;
