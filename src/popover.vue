<template>
    <div class="popover">
        <div class="contentWrapper">
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "GuluPopover"
    }
</script>

<style scoped lang="scss">
.popover{
    display:inline-block;
    >.contentWrapper{
        border:1px red solid;
        padding:5px;
    }
}
</style>