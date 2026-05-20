function Post({ post, onPostNavigate }) {
  return (
    <div
      className="post cursor-pointer border-b border-gray-100 py-4.5 px-4 "
      onClick={() => onPostNavigate(post.id)}
    >
      <p className="text-[16px] font-medium">{post.title}</p>
    </div>
  );
}

export default Post;
