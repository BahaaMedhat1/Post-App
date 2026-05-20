import InputContainer from "./InputContainer";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePost } from "@/hooks/usePost";
import { useNavigate } from "react-router-dom";

function Form({ postData, onIsSubmit }) {
  // const { users } = usePost();
  const { posts, setPosts, users } = postData;

  const formSchema = z.object({
    title: z.string().min(1, { message: "Post title is required" }),

    body: z.string().min(1, { message: "Post body is required" }),

    userId: z.string().min(1, {
      message: "Please select author for this post",
    }),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const navigate = useNavigate();

  function submitApi(data) {
    setPosts((posts) => [{ ...data, id: posts.length + 1 }, ...posts]);
    setTimeout(() => navigate("/"), 1300);
    onIsSubmit((submit) => !submit);
    reset();
  }

  return (
    <form
      className="w-[80%]  flex flex-col bg-white rounded-md m-6 p-6"
      onSubmit={handleSubmit(submitApi)}
    >
      <InputContainer inputTitle={"Title"} errorMsg={errors.title}>
        <input
          className="input-style"
          id="title"
          type="text"
          placeholder="My new post title"
          {...register("title")}
        />
      </InputContainer>

      <InputContainer inputTitle={"Body"} errorMsg={errors.body}>
        <textarea
          className="input-style"
          id="body"
          placeholder="My new post body"
          rows={5}
          {...register("body")}
        ></textarea>
      </InputContainer>

      <InputContainer inputTitle={"Author"} errorMsg={errors.userId}>
        <select className="input-style" {...register("userId")}>
          <option value="">Select Author</option>
          {users.map((user) => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </InputContainer>

      <button className="bg-[#333333] self-end rounded-sm w-[50%] py-2 text-white font-normal text-[15px] mb-6  cursor-pointer hover:opacity-85 transition-opacity  duration-200">
        Create Post
      </button>
    </form>
  );
}

export default Form;
