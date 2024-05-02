<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";
const store = useStore();
const user = store.getters["user/profile"];

const router = useRouter();
const handleLogout = () => {
  store.dispatch("user/resetToken");
  router.push("connexion");
};
</script>
<template>
  <li class="nav-item">
    <router-link to="/" class="nav-link active">
      <span class="pcoded-micon">
        <Icon icon="ion:stats-chart-outline" />
      </span>
      <span class="pcoded-mtext">Statistiques</span>
    </router-link>
  </li>
  <li class="nav-item">
    <router-link to="/passagers" class="nav-link">
      <span class="pcoded-micon">
        <Icon icon="system-uicons:users" />
      </span>
      <span class="pcoded-mtext">Passagers</span>
    </router-link>
  </li>
  <li class="nav-item">
    <router-link to="/conducteurs" class="nav-link">
      <span class="pcoded-micon">
        <Icon icon="system-uicons:users" />
      </span>
      <span class="pcoded-mtext">Conducteurs</span>
    </router-link>
  </li>
  <li class="nav-item">
    <router-link to="/trajets" class="nav-link">
      <span class="pcoded-micon">
        <Icon icon="mdi:routes" />
      </span>
      <span class="pcoded-mtext">Trajets</span>
    </router-link>
  </li>
  <li v-if="user.role === 'super-admin'" class="nav-item">
    <router-link to="/gestionnaires" class="nav-link">
      <span class="pcoded-micon">
        <Icon icon="clarity:administrator-solid" />
      </span>
      <span class="pcoded-mtext">Gestionnaires</span>
    </router-link>
  </li>
  <li v-if="user.role === 'super-admin'" class="nav-item">
    <router-link to="/facturation" class="nav-link">
      <span class="pcoded-micon">
        <Icon icon="ic:twotone-price-check" />
      </span>
      <span class="pcoded-mtext">Facturation</span>
    </router-link>
  </li>
  <li v-if="user.role === 'super-admin'" class="nav-item">
    <router-link to="/promotions" class="nav-link">
      <span class="pcoded-micon">
        <Icon icon="ps:promo" />
      </span>
      <span class="pcoded-mtext">Codes promos</span>
    </router-link>
  </li>
  <li class="nav-item">
    <router-link to="/avis" class="nav-link">
      <span class="pcoded-micon">
        <Icon icon="ic:baseline-reviews" />
      </span>
      <span class="pcoded-mtext">Avis</span>
    </router-link>
  </li>
  <hr style="background-color: #e5e5e5" />
  <li class="nav-item d-block d-sm-none">
    <router-link to="/profil" class="nav-link">
      <span class="pcoded-micon">
        <Icon icon="ls:logout" />
      </span>
      <span class="pcoded-mtext">Profil</span>
    </router-link>
  </li>
  <li class="nav-item">
    <a class="nav-link pointer" @click="handleLogout">
      <span class="pcoded-micon">
        <Icon icon="ls:logout" />
      </span>
      <span class="pcoded-mtext">Déconnexion</span>
    </a>
  </li>
</template>

<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}

.navbar-content-none {
  height: 0px !important;
  width: 0px !important;
  visibility: hidden;
  background-color: #002;
}
</style>
