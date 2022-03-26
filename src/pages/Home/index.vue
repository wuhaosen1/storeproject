<template>
  <div>
    <type-nav />
    <ListContainer />
    <TodaytCommend />
    <MyRank />
    <MyLike />
    <MyFloor />
    <MyFloor />
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
    };
  },
};
</script>

<style></style>
