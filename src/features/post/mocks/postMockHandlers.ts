import { HttpResponse, http } from "msw";
import { Post } from "../models/postModel";

const posts = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  title: `title ${i + 1}`,
}));

export const postMockHandlers = [
  http.get("/api/v1/posts", () => {
    return HttpResponse.json(posts);
  }),
  http.get("/api/v1/posts/:id", ({ params }) => {
    const id = Number(params.id);
    return HttpResponse.json(posts.find((a) => a.id === id));
  }),
  http.put("/api/v1/posts/:id", async ({ params, request }) => {
    const id = Number(params.id);
    const data = (await request.json()) as Post;
    const index = posts.findIndex((a) => a.id === id);

    if (index > -1) {
      posts[index] = {
        ...data,
      };
    }

    return HttpResponse.json(index > -1 ? { ...posts[index] } : null);
  }),
];
