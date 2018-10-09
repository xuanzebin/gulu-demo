<template>
    <div class="g-tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name:'GuluTabsPane',
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
                this.active= this.name === name
            })
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
    .g-tabs-pane{
        border:1px solid black;
        padding:20px;
    }
</style>