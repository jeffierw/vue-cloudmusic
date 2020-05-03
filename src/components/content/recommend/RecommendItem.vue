<template>
    <div id="recommend-item">
        <div class="top">
            <div class="top_left">
                <slot name="left">
                    <p class="left_top"></p>
                    <p class="left_bottom"></p>
                </slot>
            </div>
            <div class="top_right" @click="loadMore">
                <p>查看更多</p>
            </div>
        </div>
        <div class="bottom">
            <slot name="bottom">
                
            </slot> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecommendItem',
    methods:{
        // 查看更多
        loadMore(){
            console.log(111)
        },
    }
}
</script>

<style scoped>
    .top{
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        margin: 0px 10px;
    }
    .top_right{
        width: 55px;
        height: 19px;
        border: 0.4px solid #909090;
        border-radius: 10px;
        font-size: 12px;
        font-weight: 700;
        padding: 3px;
        margin-top: 17px;
    }
</style>