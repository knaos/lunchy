import {
  FETCH_RESTAURANTS,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_ERROR,
  FETCH_RESTAURANT_WITH_MENUS,
  FETCH_RESTAURANT_MENUS,
  FETCH_RESTAURANT_MENU_ITEMS
} from "../actions/restaurants";

const initialState = {
  restaurants: [],
  loading: false,
  menusById: {},
  menus: [],
  selectedRestaurant: "",
  menuItemsById: {},
  menuItems: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return { ...state, loading: true };
    case FETCH_RESTAURANTS_SUCCESS:
      return { ...state, restaurants: action.payload, loading: false };
    case FETCH_RESTAURANTS_ERROR:
      return { ...state, loading: false };
    case FETCH_RESTAURANT_MENUS:
      // let menus = [];
      // let menuItems = [];
      // let menuItemsById = {};

      // let menusById = action.payload.menus.reduce((m, menu) => {
      //   m[menu.id] = menu;
      //   menus.push(menu.id);
      //   // menu.menuItems.reduce((mi, menuItem) => {
      //   //   menuItemsById[menuItem.id] =
      //   // })
      //   return m;
      // }, {});

      return { ...state, menus: action.payload };
    case FETCH_RESTAURANT_MENU_ITEMS:
      return { ...state, menuItems: action.payload };
    default:
      return state;
  }
}
