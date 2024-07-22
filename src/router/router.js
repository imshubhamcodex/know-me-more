import Vue from "vue";
import VueRouter from "vue-router";

import home from "../components/home";

import agreedisagree from "../components/agreedisagree";
import doneAgreeDisagree from "../components/doneAgreeDisagree.vue";

import yesNo from "../components/yesno.vue";
import doneYesNo from "../components/doneYesNo.vue";

import scene from "../components/scene.vue";
import doneScene from "../components/doneScene.vue";

import error from "../components/error";

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/",
    component: home,
  },
  {
    name: "agree.disagree",
    path: "/agree.disagree",
    component: agreedisagree,
  },
  {
    name: "done agree disagree",
    path: "/done.agree.disagree",
    component: doneAgreeDisagree,
  },
  {
    name: "yes.no",
    path: "/yes.no",
    component: yesNo,
  },
  {
    name: "done yes no",
    path: "/done.yes.no",
    component: doneYesNo,
  },
  {
    name: "scene",
    path: "/scene",
    component: scene,
  },
  {
    name: "done scene",
    path: "/done.scene",
    component: doneScene,
  },
  {
    name: "error",
    path: "*",
    component: error,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
