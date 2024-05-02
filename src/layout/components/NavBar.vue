<script setup>
import { Icon } from "@iconify/vue";

const toggle = () => {
  const sidebar = document.getElementById("externSidebar");
  sidebar.classList.toggle("show");
};
</script>

<template>
  <header class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/images/logo-white.png" height="30" />
      </a>
      <button
        @click="toggle()"
        type="button"
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#externSidebar"
        aria-expanded="true"
        aria-controls="externSidebar"
        aria-label="Toggle navigation"
      >
        <Icon
          class="pointer text-white d-block"
          icon="ant-design:menu-fold-outlined"
          width="25"
          height="25"
        />
      </button>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ms-5 me-auto mb-2 mb-lg-0"></ul>
        <div class="me-5">
          <router-link to="/profil">
            <v-avatar
              label="BI"
              class="p-mr-2"
              style="background-color: #fff; color: #41348c"
              shape="circle"
            />
            <!-- <span class="text-white">{{ user.last_name.concat(" ", user.first_name) }}
            </span> -->
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
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