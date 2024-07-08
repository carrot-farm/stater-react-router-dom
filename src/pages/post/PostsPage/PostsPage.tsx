import { Link, useLoaderData } from "react-router-dom";
import { Post } from "../../../features/post/models/postModel";

function PostsPage() {
  const posts = useLoaderData() as Post[];

  return (
    <>
      <div>
        <Link to="/posts/add">글쓰기</Link>
      </div>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostsPage;
