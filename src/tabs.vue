<template>
    <div class="g-tabs">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default{
        name:'GuluTabs',
        props:{
          selected:{
              type:[String,Number],
              require:true,
              default:'girls'
          }
        },
        data(){
            return {
                eventBus:new Vue()
            }
        },
        mounted(){
          this.eventBus.$emit('update:selected',this.selected)
        },
        provide(){
            return {
                eventBus:this.eventBus
            }
        }
    }
</script>
<style scoped lang="scss"></style>