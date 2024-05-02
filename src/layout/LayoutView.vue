<template>
  <div class="d-flex app-container justify-content-start h-100">
    <NavBar />
    <main class="row">
      <div class="col-2">
        <Sidebar />
      </div>
      <div class="col-10">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import { NavBar, Sidebar } from "./components";

export default {
  name: "LayoutView",
  components: {
    NavBar,
    Sidebar,
  },
};
</script>

<style>
.app-container {
  background-color: #fafafa;
  overflow: hidden;
  height: calc(100vh - 60px);
}
main {
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100% !important;
  margin-top: 32px !important;
}
</style>
