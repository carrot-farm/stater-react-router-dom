import { useActionData, useNavigate } from "react-router-dom";
import { AuthForm } from "../../../features/auth/components/AuthForm";
import { User } from "../../../features/auth/models/userModel";
import { useEffect } from "react";
import { useAuthStore } from "@/features/auth/store/authStore";

function SignInPage() {
  const res = useActionData() as User | undefined;
  const user = useAuthStore(({ id, username, password }) => ({
    id,
    username,
    password,
  }));
  const navigate = useNavigate();
  const { signIn } = useAuthStore();

  useEffect(() => {
    if (!user?.id && res !== undefined) {
      signIn({ ...res });
      navigate("/", { replace: true });
    }
  }, [user, res, signIn, navigate]);

  return (
    <>
      <AuthForm mode="sign-in"></AuthForm>
    </>
  );
}

export default SignInPage;
