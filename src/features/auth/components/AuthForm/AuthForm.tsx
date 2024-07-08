import { useNavigation } from "react-router-dom";
import { Form } from "../../../../shared/components/Form";
import { Type } from "@sinclair/typebox";
import { userModel } from "../../models/userModel";
import { useState } from "react";

/** 회원가입, 로그인 폼 */
function AuthForm({ mode }: AuthFormProps) {
  const { state } = useNavigation();
  const [error, setError] = useState<
    Partial<Record<"username" | "password", string>> | undefined
  >({});
  const model = Type.Omit(userModel, ["id"]);
  const action = `/${mode}`;
  const buttonText =
    state === "submitting"
      ? "Loading..."
      : mode === "sign-up"
      ? "Sign Up"
      : "Sign In";

  return (
    <Form
      model={model}
      action={action}
      method="post"
      className="flex flex-col gap-4"
      onVerify={(error) => {
        setError(error);
      }}
    >
      <input
        name="username"
        type="email"
        defaultValue={"test@test.com"}
        className="border border-gray-500"
        required
        autoFocus
      />
      <sub>{error?.username}</sub>
      <input
        name="password"
        type="password"
        defaultValue="12345"
        className="border border-gray-500"
        required
      />
      <sub>{error?.password}</sub>
      <button type="submit">{buttonText}</button>
    </Form>
  );
}

/** ===== Types ===== */
type AuthFormProps = {
  /** 폼의 액션 */
  mode: "sign-up" | "sign-in";
};

export default AuthForm;
