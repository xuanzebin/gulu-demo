<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name:'GuluButtonGroup',
        mounted(){
            for (let node of this.$el.children){
                let name=node.nodeName.toLowerCase()
                if (name!=='button'){
                    console.warn(`g-button-group的子元素应该全是g-button，但是你的子元素中含有非g-button元素${name}`)
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .g-button-group{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: top;
        &>.g-button{
            &:not(:first-child){
                margin-left: -1px;
            }
            border-radius: 0;
            &:first-child{
                border-top-left-radius:var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child{
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover{
                position:relative;
                z-index:1;
            }
        }
    }
</style>