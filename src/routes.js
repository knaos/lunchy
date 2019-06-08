import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Restaurants from "./pages/Restaurants";
import RestaurantsEdit from "./pages/RestaurantEdit";
import RestaurantsAdd from "./pages/RestaurantAdd";
import RestaurantMenuItems from "./pages/RestaurantMenuItems";
import RestaurantMenus from "./pages/RestaurantMenus";

export const publicRoutes = [
  { path: "/", component: Home, exact: true },
  { path: "/sign-in", component: SignIn, exact: true }
];

export const privateRoutes = [
  {
    path: "/private",
    component: () => "private",
    exact: true
  },
  { path: "/restaurants", component: Restaurants, exact: true },
  { path: "/restaurants/add", component: RestaurantsAdd, exact: true },
  { path: "/restaurants/edit", component: RestaurantsEdit, exact: true },
  {
    path: "/restaurants/:id/menu-items",
    component: RestaurantMenuItems,
    exact: true
  },
  {
    path: "/restaurants/:id/menus",
    component: RestaurantMenus,
    exact: true
  }
];
