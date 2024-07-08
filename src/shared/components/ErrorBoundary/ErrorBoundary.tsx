import { Link, useNavigate } from "react-router-dom";

function ErrorBoundary() {
  const navigate = useNavigate();
  // const error = useRouteError();

  const handleBackClick = () => {
    navigate(-1);
  };

  // console.log("> error boundary: ", error);

  return (
    <>
      <h2>Global Error!</h2>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <button onClick={handleBackClick}>뒤로 가기</button>
      </div>
    </>
  );
}

export default ErrorBoundary;
