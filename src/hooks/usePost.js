import { use, useEffect, useReducer, useState } from "react";

export const usePost = function () {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newPost, setNewPost] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [search, setSearch] = useState("");
  const [currentAuthor, setCurrentAuthor] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => setErrors(err));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => setErrors(err));
  }, []);

  return {
    posts,
    setPosts,
    users,
    errors,
    currentPage,
    setCurrentPage,
    newPost,
    setNewPost,
    isSubmit,
    setIsSubmit,
    search,
    setSearch,
    currentAuthor,
    setCurrentAuthor,
  };
};
