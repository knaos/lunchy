import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

export const publicRoutes = [
  { path: "/", component: Home, exact: true },
  { path: "/sign-in", component: SignIn, exact: true }
];

export const privateRoutes = [
  {
    path: "/private",
    component: () => "private",
    exact: true
  }
];
