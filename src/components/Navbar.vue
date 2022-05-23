<template>
  <q-toolbar>
    <q-btn
      flat
      dense
      round
      icon="menu"
      aria-label="Menu"
      @click="toggleLeftDrawer"
    />

    <q-toolbar-title> Pharmacy Management System </q-toolbar-title>
    <div v-if="authenticated">
      <q-btn flat dense round icon="logout" label="Logout" />
    </div>
    <div v-else>
      <q-btn flat dense round icon="lock_open" label="Login" />
    </div>
  </q-toolbar>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      authenticated: true,
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.$emit("toggleDrawer");
    },
  },
};
</script>

<style></style>
