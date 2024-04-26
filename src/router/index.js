import { createRouter, createWebHistory } from "vue-router";
import AuthPage from "@/Views/AuthPage.vue";
import SignUpPage from "@/Views/SignUpPage.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
