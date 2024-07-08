import { RouteObject } from "react-router-dom";
import { UserProfilePage } from "../../pages/user/UserProfilePage";

export const userRoutes: RouteObject[] = [
  {
    path: "profile",
    element: <UserProfilePage />,
  },
];
