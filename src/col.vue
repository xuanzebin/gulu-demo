<template>
    <div class="col" :class="[span && `col-${span}`]">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        props:{
            span:{
                type:[Number,String]
            }
        }
    }
</script>
<style scoped lang="scss">
    .col{
        height:100px;
        width:50%;
        border:1px solid black;

        $class:col-;
        @for $n from 1 through 24{
            &.#{$class}#{$n}{
                width:($n/24)*100%;
            }
        }
    }
</style>