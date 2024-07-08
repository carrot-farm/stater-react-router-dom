import { HomePage } from "../../pages/home/HomePage";
import { MainLayout } from "../../widgets/MainLayout";
import { postRotues } from "./postRoutes";
import { userRoutes } from "./userRoutes";
import { authRoutes } from "./authRoutes";
import { RouteObject } from "react-router-dom";
import ErrorBoundary from "@/shared/components/ErrorBoundary/ErrorBoundary";
import { AuthGuard } from "@/features/auth/components/AuthGuard";

export const router: RouteObject[] = [
  {
    path: "/",
    hasErrorBoundary: false,
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        children: [...postRotues],
      },
      {
        path: "",
        element: <AuthGuard />,
        children: [...userRoutes],
      },
      ...authRoutes,
    ],
  },
];
