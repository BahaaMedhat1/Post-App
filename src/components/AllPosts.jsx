import { useNavigate } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import Post from "./Post";

function AllPosts({ postData }) {
  const { posts, search, currentAuthor, currentPage, setCurrentPage } =
    postData;

  const postsPerPage = 8;
  const startIndex = (currentPage - 1) * postsPerPage;

  const endIndex = startIndex + postsPerPage;

  let currentPosts = [];
  if (currentAuthor > 0) {
    currentPosts = posts.filter((post) => post.userId === currentAuthor);
  } else if (search !== "") {
    currentPosts = posts.filter((post) => post.title.includes(search));
  } else {
    currentPosts = posts.slice(startIndex, endIndex);
  }

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const navigate = useNavigate();
  function handlePostNavigate(id) {
    navigate(`/info/${id}`);
  }

  return (
    <div
      className={`posts h-175 bg-white/70 backdrop-blur-md w-full border border-gray/50  ${currentAuthor !== 0 ? "overflow-y-auto" : ""}  `}
    >
      {currentPosts.map((post) => (
        <Post post={post} key={post.id} onPostNavigate={handlePostNavigate} />
      ))}
      <PaginationContent className="flex justify-center mt-4">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();

              setCurrentPage((prev) => (prev <= 1 ? 1 : prev - 1));
            }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => setCurrentPage(currentPage)}
            isActive
          >
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            {currentPage + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={() => setCurrentPage(totalPages)}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();

              setCurrentPage((prev) =>
                prev >= totalPages ? totalPages : prev + 1,
              );
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </div>
  );
}

export default AllPosts;
