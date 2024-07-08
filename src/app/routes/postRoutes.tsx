import { RouteObject, redirect } from "react-router-dom";
import { PostsPage } from "../../pages/post/PostsPage";
import { PostAddPage } from "../../pages/post/PostAddPage";
import { PostDetailPage } from "../../pages/post/PostDetailPage";
import { PostEditPage } from "../../pages/post/PostEditPage";
import { editPost, getPost, getPosts } from "../../features/post/apis/postApis";
import { lazy } from "../../shared/utils/lazy";
import { Value } from "@sinclair/typebox/value";
import { postModel } from "../../features/post/models/postModel";

export const postRotues: RouteObject[] = [
  {
    path: "",
    element: <PostsPage />,
    loader: ({ request }) => getPosts({ signal: request.signal }),
  },
  {
    path: "add",
    element: <PostAddPage />,
  },
  {
    path: ":id",
    element: <PostDetailPage />,
    loader: ({ request, params }) => {
      return getPost({ id: Number(params.id), signal: request.signal });
    },
  },
  {
    path: ":id/edit",
    element: <PostEditPage />,
    loader: async ({ request, params }) => {
      return getPost({ id: Number(params.id), signal: request.signal });
    },
    action: async ({ request }) => {
      const formData = Object.fromEntries(await request.formData());
      const newFormData = Value.Convert(postModel, formData);

      await lazy();

      // # 유효성 검사
      if (!Value.Check(postModel, newFormData)) {
        throw new Response("Bad Request", {
          status: 400,
        });
      }

      await editPost({ ...newFormData, signal: request.signal });

      return redirect("/posts");
    },
  },
];
