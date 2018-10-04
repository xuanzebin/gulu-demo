<template>
    <div ref="wrapper" class="g-toast">
        <slot></slot>
        <div class="line" ref="line"></div>
        <span class="close" @click="closeToast">{{closeButton.text}}</span>
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
                default:50
            },
            closeButton:{
                type:Object,
                default:()=>{
                    return {
                        text:'关闭',
                        callback:undefined
                    }
                }
            }
        },
        mounted(){
            if(this.autoClose){
                setTimeout(()=>{
                    this.closeToast()
                },this.autoCloseDelay*1000)
            }
            this.$nextTick(()=>{
                this.$refs.line.style.height=`${this.$refs.wrapper.getBoundingClientRect().height}px`
            })
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
    $g-toast-min-height:40px;
    .g-toast{
        position:fixed;top:0;left:50%;transform: translateX(-50%);color:white;
        padding:0 16px;border-radius: 4px;background: $g-toast-bg;
        box-shadow: $g-toast-shadow;font-size:$g-toast-font-size;line-height: $g-toast-line-height;
        align-items: center;
        min-height:$g-toast-min-height;
        display: flex;
        .close{
            margin-left:16px;
            cursor:pointer;
        }
        .line{
            border-left: 1px solid #666;
            margin-left:16px;
        }
    }
</style>