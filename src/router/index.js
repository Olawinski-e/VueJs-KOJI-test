import Vue from "vue";
import VueRouter from "vue-router";

import ItemList from "@/views/ItemList";
import Item from "@/views/Item";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/liste",
  },
  {
    path: "/liste",
    name: "itemList",
    component: ItemList,
  },
  {
    path: "/liste/:id",
    name: "item",
    component: Item,
  },
  {
    path: "**",
    redirect: "/liste",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
