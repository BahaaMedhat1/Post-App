import Logo from "./components/Logo";
import PostList from "./pages/PostList";
import PostInfo from "./pages/PostInfo";
import CreatePost from "./pages/CreatePost";

import { Routes, Route } from "react-router-dom";
import { usePost } from "./hooks/usePost";

function App() {
  const postData = usePost();

  return (
    <main className=" container mx-auto mb-9 w-[70%]   sm:w-[80%] h-175  ">
      <Logo />
      <Routes>
        <Route path="/" element={<PostList postData={postData} />}></Route>
        <Route
          path="/info/:id"
          element={<PostInfo postData={postData} />}
        ></Route>
        <Route
          path="/create"
          element={<CreatePost postData={postData} />}
        ></Route>
      </Routes>
    </main>
  );
}

export default App;
