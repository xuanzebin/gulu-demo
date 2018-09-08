<template>
    <button class="g-button" :class="{[iconPosition]:true}">
        <svg class="icon" aria-hidden="true">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default {
        props:{
            icon:{},
            iconPosition:{
                type:String,
                default:'left',
                validate(value){
                    return value==='left' || value==='right'
                }
            }
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
        display:inline-flex;
        justify-content:center; align-items:center;
        vertical-align:top;
        &:hover{
            border:1px solid var(--border-color-hover);
        }
        &:active{
            background: var(--button-active-bg);
        }
        &:focus{
            outline:none;
        }
        >.content{
            order:2;
        }
        >.icon {
            order:1;
            width: 1em; height: 1em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
            margin-right:.15em;
        }
        &.right{
            >.content{
                order:1;
            }
            >.icon{
                order:2;
                margin-right: 0;
                margin-left:.15em;
            }
        }

    }
</style>