import DefaultLayout from "layouts/Default";
import EditProduct from "pages/edit-product";

const indexRoutes = [{ path: "/", component: DefaultLayout }];
const AppRoutes = [
  { path: "/products/:id/edit", component: EditProduct },
  { path: "/", pathTo: "/products/1/edit", name: "Products", redirect: true },
];

export default AppRoutes;

export { indexRoutes };
