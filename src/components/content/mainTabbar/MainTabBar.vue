<template>
    <nav-bar>
      <div slot="left" class="left">
        <img v-if="isChoose!==0" src="~assets/img/find/navbar/menu.svg"/>
        <img v-else src="~assets/img/common/_menu_white.svg"/>
      </div>
      <div slot="center" class="center">
        <div class="center_item" v-for="(attr,index) in navbar_center" :key="index" @click="itemClick(index)"
          :class="{chooseItem:(isChoose == index)}">{{attr}}</div>
      </div>
      <div slot="right">
        <img v-if="isChoose!==0" src="~assets/img/find/navbar/search.svg"/>
        <img v-else src="~assets/img/common/search_white.svg"/>
      </div>
    </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "MainTabBar",
  components: {
    NavBar
  },
  data() {
    return {
      navbar_center: [ "我的","发现","视频"],
      path:['/profile','/find','/video'],
      isChoose: 1
    };
  },
  created(){
      this.$router.push(this.path[1])
  },
  methods: {
    itemClick(index) {
      // console.log(index);
      this.isChoose = index;
      this.$router.push(this.path[index])
    }
  }
};
</script>

<style scoped>
.center {
  display: flex;
  padding: 0px 30px;
  font-size: 12px;
}
.center_item {
  flex: 1;
}
.right img {
  width: 16px;
  height: 16px;
  margin-top: 13px;
}
.left img {
  width: 16px;
  height: 16px;
  margin-top: 13px;
  border: 0px;
}
.chooseItem {
  font-size: 16px;
  color: black;
}
.profile{
  color: #fff;
}
</style>