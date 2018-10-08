<template>
    <div class="g-tabs-item">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name:'GuluTabsItem',
        inject:['eventBus'],
        created(){
            this.eventBus.$on('update:selected',(data)=>{
                console.log(data)
            })
        }
    }
</script>
<style scoped lang="scss"></style>