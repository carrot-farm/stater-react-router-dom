import { Link, useLoaderData, useParams } from "react-router-dom";
import { Post } from "../../../features/post/types/postTyeps";

function PostDetailPage() {
  const params = useParams();
  const post = useLoaderData() as Post;

  return (
    <>
      &gt; Move to <Link to={`/posts/${params.id}/edit`}>Edit</Link>
      <h2>
        {post?.id} : {post?.title}
      </h2>
    </>
  );
}

export default PostDetailPage;
