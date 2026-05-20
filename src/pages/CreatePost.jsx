import Header from "@/components/Header";
import Form from "@/components/Form";
import SuccessMsg from "@/components/SuccessMsg";

import { NotebookPen } from "lucide-react";
import { usePost } from "@/hooks/usePost";

function CreatePost({ postData }) {
  const { isSubmit, setIsSubmit } = usePost();
  return (
    <section className="bg-white/60 backdrop-blur-md flex flex-col">
      <Header>
        <div className="title flex items-center gap-2">
          <NotebookPen />
          <h1> post list</h1>
        </div>
      </Header>
      <Form postData={postData} onIsSubmit={setIsSubmit} />
      {isSubmit && <SuccessMsg />}
    </section>
  );
}

export default CreatePost;
