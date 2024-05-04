import { createRouter, createWebHistory } from "vue-router";

import Layout from "@/layout/LayoutView.vue";

export const constantRoutes = 
  {
    path: "/",
    component: Layout,
    redirect: "/",
    children: [
      {
        path: "/",
        component: () => import("@/views/HomeView.vue"),
        name: "acceuil",
        meta: {
          title: "Dashboard",
        },
      },
//       {
//         path: "/profil",
//         component: () => import("@/views/profil.vue"),
//         name: "profil",
//         meta: {
//           title: "Profil",
//         },
//       },
//       {
//         path: "/gestionnaires",
//         component: () => import("@/views/gestionnaires.vue"),
//         name: "gestionnaires",
//         meta: {
//           title: "Gestionnaires",
//         },
//       },
//       {
//         path: "/assurances",
//         component: () => import("@/views/assurances.vue"),
//         name: "assurances",
//         meta: {
//           title: "Assurances",
//         },
//       },
//       {
//         path: "/avis",
//         component: () => import("@/views/avis.vue"),
//         name: "avis",
//         meta: {
//           title: "Avis",
//         },
//       },
//       {
//         path: "/facturation",
//         component: () => import("@/views/facturation.vue"),
//         name: "facturation",
//         meta: {
//           title: "Facturation",
//         },
//       },
//       {
//         path: "/promotions",
//         component: () => import("@/views/promotions.vue"),
//         name: "promotions",
//         meta: {
//           title: "Promotions",
//         },
//       },
//       {
//         path: "/passagers",
//         component: () => import("@/views/passagers.vue"),
//         name: "passagers",
//         meta: {
//           title: "Passagers",
//         },
//       },
//       {
//         path: "/conducteurs",
//         component: () => import("@/views/conducteurs.vue"),
//         name: "conducteurs",
//         meta: {
//           title: "Conducteurs",
//         },
//       },
//       {
//         path: "/trajets",
//         component: () => import("@/views/trajets.vue"),
//         name: "trajets",
//         meta: {
//           title: "Trajets",
//         },
//       },
    ],
  }
//   {
//     path: "/login",
//     component: () => import("@/views/LoginView.vue"),
//   },
// ];

export const asyncRoutes = [];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
});

// export function resetRouter() {
//   const newRouter = router();
//   router.matcher = newRouter.matcher; // reset router
// }

export default router;
