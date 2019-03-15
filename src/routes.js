import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Restaurants from "./pages/Restaurants";
import RestaurantsEdit from "./pages/RestaurantEdit";
import RestaurantsAdd from "./pages/RestaurantAdd";

export const publicRoutes = [
  { path: "/", component: Home, exact: true },
  { path: "/sign-in", component: SignIn, exact: true },
  { path: "/restaurants", component: Restaurants, exact: true },
  { path: "/restaurants/add", component: RestaurantsAdd, exact: true },
  { path: "/restaurants/edit", component: RestaurantsEdit, exact: true }
];

export const privateRoutes = [
  {
    path: "/private",
    component: () => "private",
    exact: true
  }
];
