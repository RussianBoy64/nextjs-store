export enum routesNames {
  home,
  woman,
  man,
  jewelry,
  favorite,
  profile,
  cart,
  return,
  delivery,
  faq,
  contacts,
  brand,
  media,
  about,
}

export interface route {
  id: string;
  name: string;
  path: string;
}

const routes: route[] = [
  { id: "home", name: "Home", path: "/" },
  { id: "woman", name: "Woman", path: "/woman" },
  { id: "man", name: "Man", path: "/man" },
  { id: "jewelry", name: "Jewelry", path: "/jewelry" },
  { id: "favorite", name: "Favorite", path: "/favorite" },
  { id: "profile", name: "Profile", path: "/profile" },
  { id: "cart", name: "Cart", path: "/cart" },
  { id: "return", name: "Returns and complaints", path: "/return" },
  { id: "delivery", name: "Delivery & Payment", path: "/delivery" },
  { id: "faq", name: "FAQ", path: "/faq" },
  { id: "contacts", name: "Contacts", path: "/contacts" },
  { id: "brand", name: "Brand files", path: "/brand" },
  { id: "media", name: "Media", path: "/media" },
  { id: "about", name: "About shopping", path: "/about" },
];

export default routes;
