<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <Navbar @toggleDrawer="leftDrawerOpen = !leftDrawerOpen" />
    </q-header>

    <Drawer :leftDrawerOpen="leftDrawerOpen" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Navbar from "components/Navbar.vue";
import Drawer from "components/Drawer.vue";

export default {
  name: "MainLayout",
  components: {
    Navbar,
    Drawer,
  },
  data() {
    return {
      leftDrawerOpen: true,
    };
  },
  methods: {},
};
</script>
