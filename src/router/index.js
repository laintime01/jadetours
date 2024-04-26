import { createRouter, createWebHistory } from "vue-router";
import AuthPage from "@/Views/AuthPage.vue";
import SignUpPage from "@/Views/SignUpPage.vue";
import AdminDashboard from "@/Views/AdminDashboard.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: AuthPage,
  },
  {
    path: "/signup",
    name: "SignUpPage",
    component: SignUpPage,
  },
  {
    path: "/dashboard",
    name: "AdminDashboard",
    component: AdminDashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
