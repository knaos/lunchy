import Home from "./pages/Home";

export const publicRoutes = [{ path: "/", component: Home, exact: true }];

export const privateRoutes = [
  {
    path: "/private",
    component: () => "private",
    exact: true
  }
];
