import AboutScreen from "../Screens/AboutScreen";
import ContactScreen from "../Screens/ContactScreen";
import HomeScreen from "../Screens/HomeScreen";
import ServiceScreen from "../Screens/ServiceScreen";

export const routing = [
  {
    path: "/",
    component: HomeScreen,
  },
  {
    path: "/about",
    component: AboutScreen,
  },
  {
    path: "/service",
    component: ServiceScreen,
  },
  {
    path: "/contact",
    component: ContactScreen,
  },
];
