<template>
    <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
        <div class="info-desc clear-fix">
            <div class="start">
        </div>
            <div class="desc">{{detailInfo.desc}}</div>
            <div class="end"></div>
        </div>
        <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
        <div class="info-list">
            <img v-for="(item, index) in detailInfo.detailImage[0].list" :src="item" alt=""
           @load="loadImage">
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailInfo",
        props:{
            detailInfo:{
                type:Object,
                defaults(){
                    return {}
                }

            }
        },
        data(){
            return {
                count:0,
                imageLength:0
            }
        },

        methods:{
            //监听图片的加载情况，防止scroll组件下滑时，刚开始的高度判断比实际的小
            //所有图片都加载完，进行一次回调
            loadImage(){
                if(++this.count===this.imageLength){
                    this.$emit('imageLoad')
                }

            }
        },
        watch:{ //监听detailInfo ,判断图片的长度
            detailInfo(){
                this.imageLength=this.detailInfo.detailImage[0].list.length
            }
        }

    }
</script>

<style scoped>
    .goods-info {
        padding: 20px 0;
        border-bottom: 5px solid #f2f5f8;
    }

    .info-desc {
        padding: 0 15px;
    }

    .info-desc .start, .info-desc .end {
        width: 90px;
        height: 1px;
        background-color: #a3a3a5;
        position: relative;
    }

    .info-desc .start {
        float: left;
    }

    .info-desc .end {
        float: right;
    }

    .info-desc .start::before, .info-desc .end::after {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: #333;
        bottom: 0;
    }

    .info-desc .end::after {
        right: 0;
    }

    .info-desc .desc {
        padding: 15px 0;
        font-size: 14px;
    }

    .info-key {
        margin: 10px 0 10px 15px;
        color: #333;
        font-size: 15px;
    }

    .info-list img {
        width: 100%;
    }
</style>