import { Static, Type as t } from "@sinclair/typebox";

export const postModel = t.Object({
  id: t.Number(),
  title: t.String(),
});

export type Post = Static<typeof postModel>;
