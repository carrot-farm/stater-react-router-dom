import { Static, Type as t } from "@sinclair/typebox";

export const userModel = t.Object({
  id: t.Number(),
  username: t.String({
    minLength: 4,
  }),
  password: t.String({
    minLength: 5,
  }),
});

export type User = Static<typeof userModel>;
