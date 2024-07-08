import {
  Form,
  Link,
  useLoaderData,
  useNavigation,
  useParams,
} from "react-router-dom";
import { Post } from "../../../features/post/models/postModel";

function PostEditPage() {
  const params = useParams();
  const post = useLoaderData() as Post;
  const navigation = useNavigation();

  return (
    <>
      &gt; Move to <Link to={`/posts/${params.id}`}>Detail</Link>
      <Form method="post" className="mt-4">
        <input name="id" type="hidden" value={post.id} />
        <textarea
          name="title"
          className="border border-gray-500"
          required
          defaultValue={post?.title}
        ></textarea>

        <button
          type="submit"
          className="block"
          disabled={navigation.state === "submitting"}
        >
          {navigation.state === "submitting" ? "Loading..." : "Submit"}
        </button>
      </Form>
    </>
  );
}

export default PostEditPage;
