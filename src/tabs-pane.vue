<template>
    <div class="g-tabs-pane">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name:'GuluTabsPane',
        inject:['eventBus'],
        created(){
            this.eventBus.$on('update:selected',(data)=>{
                console.log(data)
            })
        }
    }
</script>
<style scoped lang="scss"></style>