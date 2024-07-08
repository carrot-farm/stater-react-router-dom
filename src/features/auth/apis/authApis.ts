import { User } from "../models/userModel";

/** 가입 */
export const signUp = ({
  signal,
  ...data
}: Pick<User, "username" | "password"> & { signal: AbortSignal }) =>
  fetch("/api/v1/sign-up", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
    signal,
  }).then((res) => res.json());

/** 로그인 */
export const signIn = ({
  signal,
  ...data
}: Pick<User, "username" | "password"> & { signal: AbortSignal }) =>
  fetch("/api/v1/sign-in", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
    signal,
    // }).then((res) => res.json());
  });
