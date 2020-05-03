<template>
    <div class="findSwiper">
        <swiper>
            <swiper-item v-for="(item,index) in banner" :key="index">
                 <a :href="item.url">
                     <img :src="item.pic">
                     </a>  
            </swiper-item>
        </swiper>
    </div>
</template>

<script>

import {Swiper,SwiperItem} from 'components/common/swiper/index'

export default {
    name: 'FindSwiper',
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        banner:{
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>

</style>