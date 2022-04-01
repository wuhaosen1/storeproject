<template>
  <div class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" title="尚品汇" to="/home" target="">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="search"
            @keyup.enter="search"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    search() {
      // this.$store.dispatch("search/reqSearchInfo", this.params);
      //传params参数和query参数
      //1传统写法
      // this.$router.push(
      //   "/search/" + this.keyword + "?k=" + this.keyword.toUpperCase()
      // );
      //2模板字符串写法
      // this.$router.push(
      //   `/search/${this.keyword}?k=${this.keyword.toUpperCase()}`
      // );
      //3对象写法用的最多需要给路由加name,不可以通过path进行跳转！！！，如果已经占位了就必须传不然会导致路径错乱，可以传undefined占位
      //4路由组件可以传递props
      // if (this.keyword) {
      //   this.$router.push({
      //     name: "search",
      //     params: { keyword: this.keyword },

      //   });
      // } else {
      //   this.$router.push({
      //     name: "search",
      //     params: { keyword: undefined },

      //   });
      // }
      // if (this.$route.query) {
      //   let location = {
      //     name: "search",
      //     params: { keyword: this.keyword || undefined },
      //   };
      //   location.query = this.$route.query;
      //   this.$router.push(location);
      // }
      if (this.$route.query) {
        let location = {
          name: "search",
          params: { keyword: this.keyword || undefined },
        };
        location.query = this.$route.query;
        this.$router.push(location);
      }
    },
  },
  mounted() {
    this.$bus.$on("clear", () => {
      // console.log("clear");
      this.keyword = "";
    });
  },
};
</script>

<style soped lang="less">
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
