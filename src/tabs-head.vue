<template>
    <div class="g-tabs-head">
        <slot></slot>
        <div class="action"></div>
        <slot name="action"></slot>
    </div>
</template>
<script>
    export default{
        name:'GuluTabsHead',
    }
</script>
<style scoped lang="scss">
    .g-tabs-head{
        display: flex;
        justify-content: flex-start;
        align-items:center;
        cursor: pointer;
        > .action{
            margin-left: auto;
        }
    }
</style>