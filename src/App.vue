<template>
  <v-app>
    <LayoutView />
  </v-app>
</template>

<script setup>
// import { ref } from "vue";
import LayoutView from "./layout/LayoutView.vue";

// const drawer = ref(false);
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#navbar {
  background: linear-gradient(
    90.04deg,
    #fadd17 -109.54%,
    #84328a 146.11%,
    #fadd17 146.11%
  );
  box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
    0px 3px 6px rgba(96, 97, 112, 0.08);
  max-height: 60px;
  min-height: 60px;
}
</style>