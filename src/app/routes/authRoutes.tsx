import { RouteObject, redirect } from "react-router-dom";
import { SignInPage } from "../../pages/auth/SignInPage";
import { SignUpPage } from "../../pages/auth/SignUpPage";
import { Type } from "@sinclair/typebox";
import { signIn, signUp } from "../../features/auth/apis/authApis";
import { userModel } from "../../features/auth/models/userModel";
import { convertFormData } from "../../shared/utils/formUtils";

export const authRoutes: RouteObject[] = [
  {
    path: "sign-up",
    element: <SignUpPage />,
    action: async ({ request }) => {
      const model = Type.Omit(userModel, ["id"]);
      const data = convertFormData({ data: await request.formData(), model });

      try {
        await signUp({ ...data, signal: request.signal });
        return redirect("/");
      } catch (err) {
        const error = err as { message?: string; status?: number };
        throw new Response(error.message, {
          status: error.status,
        });
      }
    },
  },
  {
    path: "sign-in",
    element: <SignInPage />,
    action: async ({ request }) => {
      const model = Type.Omit(userModel, ["id"]);
      const data = convertFormData({ data: await request.formData(), model });

      const user = await signIn({ ...data, signal: request.signal });

      return user;
    },
  },
];
