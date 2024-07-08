import { Outlet, redirect } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { useEffect } from "react";

/** 인증 가드 */
function AuthGuard() {
  const user = useAuthStore(({ id, username }) => ({ id, username }));

  useEffect(() => {
    if (!user.id) {
      redirect("/", { status: 403 });
      return;
    }
  }, [user]);

  return <>{user?.id ? <Outlet /> : null} </>;
}

export default AuthGuard;
