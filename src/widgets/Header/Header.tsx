import { useAuthStore } from "@/features/auth/store/authStore";
import { Link } from "react-router-dom";

/** header */
function Header() {
  const user = useAuthStore(({ id, username, password }) => ({
    id,
    username,
    password,
  }));
  const signOut = useAuthStore((state) => state.signOut);
  const handleSignOutClick = () => {
    if (!confirm("로그아웃 하시겠습니까?")) {
      return;
    }
    signOut();
  };

  return (
    <header className="flex justify-between items-center max-w-[980px] mx-auto">
      <h1>Logo</h1>
      <nav>
        <ul className="flex gap-4">
          {navigation.map(([path, text]) => (
            <li key={path}>
              <Link to={path}>{text}</Link>
            </li>
          ))}

          {/* 가입 / 로그인 버튼 */}
          {!user.id && (
            <>
              <li>
                <Link to="/sign-up">Sign Up</Link>
              </li>
              <li>
                <Link to="/sign-in">Sign In</Link>
              </li>
            </>
          )}

          {/* 사용자명 / 로그아웃 버튼 */}
          {user.id && (
            <>
              <li>{user?.username}</li>
              <li>
                <button onClick={handleSignOutClick}>Sign Out</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

const navigation = [
  ["/", "Home"],
  ["/posts", "Post"],
  ["/profile", "Profile"],
];

export default Header;
