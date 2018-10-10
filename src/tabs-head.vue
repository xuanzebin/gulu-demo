<template>
    <div class="g-tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="action">
            <slot name="action"></slot>
        </div>
    </div>
</template>
<script>
    export default{
        name:'GuluTabsHead',
        inject:['eventBus'],
        data(){
            return{
                rootLeft:null
            }
        },
        mounted(){
            this.eventBus.$on('update:selected',(name,vm)=>{
                let {width,left}=vm.$el.getBoundingClientRect()
                this.$refs.line.style.width=`${width}px`
                this.$refs.line.style.left=`${left-this.rootLeft}px`
            })
        }
    }
</script>
<style scoped lang="scss">
    $line-color: #4A90E2;
    $bottom-line-color:#ddd;
    .g-tabs-head{
        display: flex;
        justify-content: flex-start;
        align-items:center;
        cursor: pointer;
        position:relative;
        border-bottom:1px solid $bottom-line-color;
        > .line{
            position:absolute;
            bottom:0; left:0;
            border-bottom:1px solid $line-color;
            transition: all 0.3s;
        }
        > .action{
            margin-left: auto;
        }
    }
</style>