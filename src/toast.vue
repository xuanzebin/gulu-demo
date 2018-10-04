<template>
    <div class="g-toast">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'GuluToast',
        props:{
            autoClose:{
                type:Boolean,
                default:true
            },
            autoCloseDelay:{
                type:Number,
                default:2
            }

        },
        mounted(){
            if(this.autoClose){
                setTimeout(()=>{
                    this.closeToast()
                },this.autoCloseDelay*1000)
            }
        },
        methods:{
            closeToast(){
                this.$el.remove()
                this.$destroy()
            }
        }
    }
</script>
<style scoped lang="scss">
    $g-toast-bg:rgba(0,0,0,0.74);
    $g-toast-shadow:0 0 3px 0 rgba(0,0,0,0.50);
    $g-toast-font-size:14px;
    $g-toast-line-height:2.0;
    .g-toast{
        position:fixed;top:0;left:50%;transform: translateX(-50%);color:white;
        padding:0 16px;border-radius: 4px;background: $g-toast-bg;
        box-shadow: $g-toast-shadow;font-size:$g-toast-font-size;line-height: $g-toast-line-height;
    }
</style>