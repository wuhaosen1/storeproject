<template>
  <div>
    <h2>{{ this.$route.params.keyword }}</h2>
    <h1>{{ this.$route.query.k }}</h1>
  </div>
</template>

<script>
export default {
  name: "MySearch",
  props: ["keyword"],
  data() {
    return {
      n: 1,
    };
  },
};
</script>

<style></style>
