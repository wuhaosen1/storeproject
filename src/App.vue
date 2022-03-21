<template>
  <div id="app">
    <my-header />
    <my-footer />
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
};
</script>

<style></style>
