import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "./pages/_layout/auth";
import { SignIn } from "./pages/auth/sign-in";

export const router = createBrowserRouter([
  {
    path: '/',
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: 'sign-in',
        element: <SignIn />,
      }
    ]
  },
  {
    path: 'sign-up'
  }
])