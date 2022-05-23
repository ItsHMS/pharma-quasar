import dashboardLayout from "layouts/MainLayout.vue";
import home from "pages/dashboard/home.vue";
import bills from "pages/dashboard/bills.vue";
import customers from "pages/dashboard/customers.vue";
import suppliers from "pages/dashboard/suppliers.vue";
import categories from "pages/dashboard/categories.vue";
import stocks from "pages/dashboard/stocks.vue";
import ErrorNotFound from "pages/ErrorNotFound.vue";
const routes = [
  {
    path: "/dashboard",
    component: dashboardLayout,
    children: [
      {
        path: "",
        component: home,
      },
      {
        path: "bills",
        component: bills,
      },
      {
        path: "customers",
        component: customers,
      },
      {
        path: "suppliers",
        component: suppliers,
      },
      {
        path: "categories",
        component: categories,
      },
      {
        path: "stocks",
        component: stocks,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: ErrorNotFound,
  },
];

export default routes;
