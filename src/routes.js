import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Restaurants from "./pages/Restaurants";

export const publicRoutes = [
  { path: "/", component: Home, exact: true },
  { path: "/sign-in", component: SignIn, exact: true },
  { path: "/restaurants", component: Restaurants, exact: true }
];

export const privateRoutes = [
  {
    path: "/private",
    component: () => "private",
    exact: true
  }
];
