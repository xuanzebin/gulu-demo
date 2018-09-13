<template>
    <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]"
    :style="{paddingLeft:gutter/2 + 'px',paddingRight:gutter/2 + 'px'}"
    >
        <div style="height:100px;width:100%;border:1px solid black;">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default{
        name:'GuluCol',
        props:{
            span:{
                type:[Number,String]
            },
            offset:{
                type:[Number,String]
            }
        },
        data(){
            return {
                gutter:0
            }
        }
    }
</script>
<style scoped lang="scss">
    .col{
        $class:col-;
        @for $n from 1 through 24{
            &.#{$class}#{$n}{
                width:($n/24)*100%;
            }
        }
        $class:offset-;
        @for $n from 1 through 24{
            &.#{$class}#{$n}{
                margin-left:($n/24)*100%;
            }
        }
    }
</style>