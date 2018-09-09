<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>
<script>
    export default{

    }
</script>
<style lang="scss">
    .g-button-group{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        &>.g-button{
            &:not(:first-child){
                margin-left: -1px;
            }
            border-radius: 0;
            &:first-child{
                border-top-left-radius:var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child{
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover{
                position:relative;
                z-index:1;
            }
        }
    }
</style>