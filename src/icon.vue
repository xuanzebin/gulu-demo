<template>
    <svg class="g-icon" aria-hidden="true">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
    import './svg'
    export default{
        name:'GuluIcon',
        props:['name']
    }
</script>
<style lang="scss" scoped>
    .g-icon {
        width: 1.5em; height:1.5em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>