import { useAuthStore } from "@/features/auth/store/authStore";

function UserProfilePage() {
  const user = useAuthStore(({ id, username }) => ({ id, username }));

  return (
    <>
      <h1>Profile Page</h1>
      <p>id : {user?.id}</p>
      <p>username : {user?.username}</p>
    </>
  );
}

export default UserProfilePage;
