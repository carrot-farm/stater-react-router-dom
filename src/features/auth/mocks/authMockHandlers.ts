import { HttpResponse, http } from "msw";
import { User } from "../models/userModel";
import { lazy } from "../../../shared/utils/lazy";

const users: User[] = [
  {
    id: 1,
    username: "test@test.com",
    password: "12345",
  },
];

export const authMockHandlers = [
  http.post("/api/v1/sign-up", async ({ request }) => {
    const user = (await request.json()) as Pick<User, "username" | "password">;
    const alreadyExists = users.find((a) => a.username === user.username);

    await lazy();

    if (alreadyExists) {
      throw new HttpResponse(
        JSON.stringify({ result: false, message: "Already exists" }),
        {
          status: 403,
          statusText: "Already exists",
        }
      );
    }

    users.push({ id: users.length, ...user });
    return HttpResponse.json(user);
  }),
  http.post("/api/v1/sign-in", async ({ request }) => {
    const user = (await request.json()) as Omit<User, "id">;
    const findedUser = users.find(
      (a) => a.username === user.username && a.username === user.username
    );

    await lazy();

    if (!findedUser) {
      throw new HttpResponse(
        JSON.stringify({ result: false, message: "Not Found" }),
        {
          status: 404,
          statusText: "Not Found",
        }
      );
    }

    return HttpResponse.json(findedUser);
  }),
];
