import { ArrowLeft } from "lucide-react";
import { User } from "lucide-react";
import { Calendar } from "lucide-react";

import { usePost } from "@/hooks/usePost";
import { useParams, useNavigate } from "react-router-dom";

function PostInfo({ postData }) {
  const { users } = usePost();
  const { posts } = postData;

  const { id } = useParams();
  const [currentPost] = posts.filter((post) => post.id === Number(id));

  const [currentUser] = users.filter(
    (user) => user.id === Number(currentPost.userId),
  );
  const navigate = useNavigate();

  return (
    <section className="post-info flex flex-col">
      <div className="post-author ">
        <button className="back-btn" onClick={() => navigate("/")}>
          <ArrowLeft size={18} />
          Back to posts
        </button>
        <p className="my-7 text-white font-bold text-4xl">
          {currentPost?.title}
        </p>
        <div className="flex items-center gap-8">
          <span className="author ">
            <User size={18} /> {currentUser?.name}
          </span>
          <span className="date">
            <Calendar size={18} />
            Sun, August 24th, 2025
          </span>
        </div>
      </div>
      <div className="post-content w-full h-[50%] bg-white/80 backdrop-blur-sm">
        <p className="content p-6 w-[50%]">{currentPost?.body}</p>
      </div>
    </section>
  );
}

export default PostInfo;
