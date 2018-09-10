<template>
    <button class="g-button" :class="{[iconPosition]:true}" @click="$emit('click')">
        <g-icon name="loading" v-if="loading" class="loading icon"></g-icon>
        <g-icon :name="icon" v-if="icon && !loading" class="icon"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from './icon'
    export default {
        props:{
            icon:{},
            iconPosition:{
                type:String,
                default:'left',
                validate(value){
                    return value==='left' || value==='right'
                }
            },
            loading:{
                type:Boolean,
                default:false
            }
        },
        components:{
            'g-icon':Icon
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
        >.icon{
            margin-right:.15em;
            order:1;
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
        @keyframes spin{
            0%{transform: rotate(0deg);}
            100%{transform: rotate(-360deg);}
        }
        >.loading{
            animation:spin 0.5s infinite linear;
        }

    }
</style>