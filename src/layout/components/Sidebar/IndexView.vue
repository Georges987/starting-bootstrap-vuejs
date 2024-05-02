<template>
  <div id="externSidebar" class="collapse show">
    <nav class="pcoded-navbar menu-light brand-blue sidebar">
      <div class="navbar-wrapper">
        <div class="navbar-content scroll-div">
          <ul class="nav pcoded-inner-navbar pt-4">
            <SidebarItem />
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import SidebarItem from "./SidebarItem.vue";
</script>

<style>
@import url("./sidebar.css");

.h-0 {
  height: 0px !important;
}

.w-0 {
  width: 0px !important;
}
</style>


