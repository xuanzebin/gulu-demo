<template>
    <div class="g-tabs-item" @click="chooseTabs">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name:'GuluTabsItem',
        props:{
            name:{
                type:[Number,String],
                require:true
            }
        },
        inject:['eventBus'],
        created(){
            this.eventBus.$on('update:selected',(data)=>{
                console.log(data)
            })
        },
        methods:{
            chooseTabs(){
                this.eventBus.$emit('update:selected',this.name)
            }
        }
    }
</script>
<style scoped lang="scss"></style>