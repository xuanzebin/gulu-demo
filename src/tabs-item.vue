<template>
    <div class="g-tabs-item" @click="chooseTabs" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name:'GuluTabsItem',
        data(){
            return {
                active:false
            }
        },
        props:{
            name:{
                type:[Number,String],
                require:true
            }
        },
        inject:['eventBus'],
        mounted(){
            this.eventBus.$on('update:selected',(name)=>{
                this.active = this.name === name
            })
        },
        methods:{
            chooseTabs(){
                this.eventBus.$emit('update:selected',this.name)
            }
        },
        computed:{
            classes(){
                return {
                    active:this.active
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    .g-tabs-item{
        display: flex;
        justify-content: center;
        align-items: center;
        padding:0 2em;
        height:40px;
        border:1px solid black;
        border-top-left-radius:4px;
        border-top-right-radius:4px;
        &.active{
            background: #999;
        }
    }
</style>