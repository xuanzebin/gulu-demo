<template>
    <button class="g-button" >
        <svg class="icon" aria-hidden="true">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <slot></slot>
    </button>
</template>
<script>
    export default {
        props:{
            icon:{}
        }
    }
</script>
<style lang="scss">
    .g-button{
        font-size:var(--font-size);
        height:var(--button-height);
        padding:0 1em;
        border-radius:var(--border-radius);
        border:1px solid var(--border-color);
        background: var(--button-bg);
        &:hover{
            border:1px solid var(--border-color-hover);
        }
        &:active{
            background: var(--button-active-bg);
        }
        &:focus{
            outline:none;
        }
        >.icon {
            width: 1em; height: 1em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
        }
    }
</style>