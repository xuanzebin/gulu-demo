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
            if (this.$children.length===0){
                console && console.warn && console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
            }
            this.$children.forEach(vm=>{
                vm.rootLeft=this.$el.getBoundingClientRect().left
                if (vm.$options.name==='GuluTabsHead'){
                    vm.$children.forEach(childVm=>{
                        if (childVm.$options.name='GuluTabsItem' && childVm.name===this.selected){
                            this.eventBus.$emit('update:selected',this.selected,childVm)
                        }
                    })
                }
            })
        },
        provide(){
            return {
                eventBus:this.eventBus
            }
        }
    }
</script>
<style scoped lang="scss"></style>