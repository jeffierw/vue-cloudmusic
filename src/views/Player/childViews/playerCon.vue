<template>
  <div id="playCon">
      <div class="player_con" :class="{playing:$store.state.Pause}">
                    <img src="~assets/img/player/player_bar.png" class="play_bar" />
                    <!-- 黑胶碟片 -->
                    <img src="~assets/img/player/disc.png" class="disc autoRotate" />
                    <img :src="getUrl" class="cover autoRotate" />
         </div>  
  </div>
</template>

<script>
export default {
    name: 'playCon',
    computed:{
        getUrl(){
            let url = this.$store.state.music.songItem.picUrl
            return url
        }
    },
}
</script>

<style scoped>
    .player_con {
        position: absolute;
        width: 250px;
        height: 250px;
        top: 36%;
        left: 32%;
        transform: translate(-50%, -50%);
    }
    .play_bar {
        position: absolute;
        left: 200px;
        top: -10px;
        z-index: 10;
        transform: rotate(-25deg);
        transform-origin: 12px 12px;
        transition: 1s;
    }
    .player_con.playing .play_bar {
        transform: rotate(0);
    }
    .disc {
        position: absolute;
        left: 73px;
        top: 60px;
        z-index: 9;
    }
    .cover {
        position: absolute;
        left: 125px;
        top: 112px;
        width: 150px;
        height: 150px;
        border-radius: 75px;
        z-index: 8;
    }
    /* 旋转的动画 */
    @keyframes Rotate {
        from {
            transform: rotateZ(0);
        }

        to {
            transform: rotateZ(360deg);
        }
    }

    /* 旋转的类名 */
    .autoRotate {
        animation-name: Rotate;
        animation-iteration-count: infinite;
        animation-play-state: paused;
        animation-timing-function: linear;
        animation-duration: 5s;
    }

    /* 是否正在播放 */
    .player_con.playing .disc,
    .player_con.playing .cover {
        animation-play-state: running;
    }
</style>

