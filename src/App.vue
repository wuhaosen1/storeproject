<template>
  <div>
    <my-header />
    <router-view></router-view>
    <my-footer v-show="this.$route.meta.show" />
  </div>
</template>

<script>
import MyHeader from "./components/Header";
import MyFooter from "./components/Footer";
export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
  },
  mounted() {
    this.$store.dispatch("home/categoryList");
    
  },
};
</script>

<style></style>
