import { createRouter, createWebHistory } from "vue-router";

import AuthPage from "@/Views/AuthPage.vue";
import SignUpPage from "@/Views/SignUpPage.vue";
import AdminDashboard from "@/Views/AdminDashboard.vue";
import AdminSettings from "@/Views/AdminSettings.vue";
import AdminSearchHistory from "@/Views/AdminSearchHistory.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const routes = [
  {
    path: "/auth",
    name: "AuthLayout",
    component: AuthLayout,
    children: [
      {
        path: "login",
        name: "LoginPage",
        component: AuthPage,
      },
      {
        path: "signup",
        name: "SignUpPage",
        component: SignUpPage,
      },
    ],
  },
  {
    path: "/",
    name: "DefaultLayout",
    component: DefaultLayout,
    children: [
      {
        path: "search",
        name: "AdminDashboard",
        component: AdminDashboard,
      },
      {
        path: "settings",
        name: "AdminSettings",
        component: AdminSettings,
      },
      {
        path: "history",
        name: "AdminSearchHistory",
        component: AdminSearchHistory,
      },
]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
