<template>
  <div>
    <type-nav />
    <ListContainer />
    <TodaytCommend />
    <MyRank />
    <MyLike />
    <MyFloor :carouselList="carousellist1" />
    <MyFloor :carouselList="carousellist2" />
    <Mybrand />
  </div>
</template>

<script>
import ListContainer from "./list-container";
import TodaytCommend from "./todayrecommend";
import MyRank from "./rank";
import MyLike from "./like";
import MyFloor from "./floor";
import Mybrand from "./brand";

import { mapState } from "vuex";

export default {
  name: "MyHome",
  components: {
    ListContainer,
    TodaytCommend,
    MyRank,
    MyLike,
    MyFloor,
    Mybrand,
  },
  data() {
    return {
      n: 1,
      carousellist1: [],
      carousellist2: [],
    };
  },
  computed: {
    ...mapState("home", ["floorlist"]),
  },
  watch: {
    floorlist() {
      this.carousellist1 = this.floorlist[0].carouselList;
      this.carousellist2 = this.floorlist[1].carouselList;
    },
  },
  mounted() {
    this.$store.dispatch("home/getFloorList");
  },
};
</script>

<style></style>
