import { Post } from "../models/postModel";

export const getPosts = ({
  signal,
}: {
  signal?: AbortSignal;
}): Promise<Post[]> =>
  fetch("/api/v1/posts", { signal }).then((res) => res.json());

export const getPost = ({ id, signal }: { id: number; signal?: AbortSignal }) =>
  fetch(`/api/v1/posts/${id}`, { signal }).then((res) => res.json());

export const editPost = ({
  signal,
  ...data
}: Post & { signal?: AbortSignal }) =>
  fetch(`/api/v1/posts/${data.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    signal,
  });
