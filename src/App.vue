<template>
  <div id="app">
    <main-tab-bar/>
    <keep-alive exclude="RankItem,songSheet,Profile">
      <router-view/>
    </keep-alive>
    <player/>
  </div>
</template>

<script>

import MainTabBar from 'components/content/mainTabbar/MainTabBar'
import Player from 'views/Player/Player'

export default {
  name: 'App',
  components: {
    MainTabBar,
    Player
  },
  
}
</script>

<style scoped>
  @import 'assets/css/base.css';
  
</style>
