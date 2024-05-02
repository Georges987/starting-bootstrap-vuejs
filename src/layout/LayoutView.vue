<template>
  <div class="d-flex app-container justify-content-start">
    <NavBar />
    <main class="p-4">
      <SideBar />
      <router-view />
    </main>
  </div>
</template>

<script>
import { NavBar, SideBar } from "./components";

export default {
  name: "LayoutView",
  components: {
    NavBar,
    SideBar,
  },
};
</script>

<style>
.app-container {
  background-color: #fafafa;
  overflow: hidden;
  margin-top: 60px;
  height: calc(100vh - 60px);
}
main {
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100% !important;
}
</style>
