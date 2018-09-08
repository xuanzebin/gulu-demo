<template>
    <button class="g-button" :class="{[iconPosition]:true}">
        <g-icon :icon="icon"></g-icon>
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