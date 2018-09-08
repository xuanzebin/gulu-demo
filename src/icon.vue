<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="`#i-${icon}`"></use>
    </svg>
</template>
<script>
    export default{
        props:['icon']
    }
</script>
<style lang="scss">
    .icon {
        order:1;
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        margin-right:.15em;
    }
</style>