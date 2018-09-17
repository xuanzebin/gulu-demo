<template>
    <div class="layout" :class="layoutClasses">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'GuluLayout',
        data(){
            return {
                layoutClasses:{
                    hasSider:false
                }
            }
        },
        mounted(){
            this.$children.forEach(vm=>{
                if (vm.$options.name==='GuluSider'){
                    this.layoutClasses.hasSider=true
                }
            })
        }
    }
</script>
<style lang="scss" scoped>
    .layout{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        &.hasSider{
            flex-direction: row;
        }
    }
</style>