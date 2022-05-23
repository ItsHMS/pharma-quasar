<template>
  <q-drawer :mini="mini" v-if="leftDrawerOpen" show-if-above bordered>
    <q-list>
      <template v-for="(link, index) in links" :key="index">
        <q-item clickable :to="'/dashboard/' + link.path">
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ link.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-list>
  </q-drawer>
</template>

<script>
export default {
  name: "DrawerComponent",
  props: ["leftDrawerOpen"],
  data() {
    return {
      mini: true,
      links: [
        {
          path: "",
          icon: "dashboard",
          title: "Dashboard",
        },
        {
          path: "stocks",
          icon: "inventory",
          title: "Stocks",
        },
        {
          path: "customers",
          icon: "group_add",
          title: "Customers",
        },
        {
          path: "bills",
          icon: "receipt",
          title: "Bills",
        },
        {
          path: "suppliers",
          icon: "warehouse",
          title: "Suppliers",
        },
        {
          path: "categories",
          icon: "category",
          title: "Categories",
        },
      ],
    };
  },
  mounted() {
    this.mini = true;
  },
};
</script>

<style></style>
