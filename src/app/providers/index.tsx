import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { router } from "../routes";
import { useMemo } from "react";

function Providers() {
  const browserRouter = useMemo(() => createBrowserRouter(router), []);

  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default Providers;
