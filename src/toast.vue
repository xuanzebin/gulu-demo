<template>
    <div class="wrapper" :class="toastPosition">
        <div ref="toast" class="g-toast">
            <div class="message">
                <slot v-if="!enableHTML"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" @click="clickCloseButton">{{closeButton.text}}</span>
        </div>
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
            },
            enableHTML:{
                type:Boolean,
                default:false
            },
            position:{
                type:String,
                default:'top',
                validate(value){
                    return ['top','bottom','middle'].indexOf(value)>=0
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
                this.$refs.line.style.height=`${this.$refs.toast.getBoundingClientRect().height}px`
            })
        },
        computed:{
            toastPosition:function(){
                return {[`position-${this.position}`]:true}
            }
        },
        methods:{
            clickCloseButton(){
              this.closeToast()
              if (this.closeButton.callback && typeof this.closeButton.callback==='function') {
                  this.closeButton.callback(this)
              }
            },
            closeToast(){
                this.$el.remove()
                this.$emit('close')
                this.$destroy()
            }
        }
    }
</script>
<style scoped lang="scss">
    $g-toast-bg:rgba(0,0,0,0.74);
    $g-toast-shadow:0 0 3px 0 rgba(0,0,0,0.50);
    $g-toast-font-size:14px;
    $g-toast-line-height:1.8;
    $g-toast-min-height:40px;
    $g-toast-animationTime:0.5s;
    @keyframes fade-in{
        0%{opacity:0;}
        100%{opacity:1;}
    }
    @keyframes slide-up{
        0%{transform:translateY(100%)}
        100%{transform:translateY(0%)}
    }
    @keyframes slide-down{
        0%{transform:translateY(-100%)}
        100%{transform:translateY(0%)}
    }
    .wrapper{
        position:fixed;left:50%;
        &.position-top{
            top:0;
            transform: translateX(-50%);
            .g-toast{
                animation:slide-down $g-toast-animationTime;
                border-top-left-radius: 0;
                border-top-right-radius: 0;
            }
        }
        &.position-bottom{
            bottom:0;
            transform: translateX(-50%);
            .g-toast{
                animation:slide-up $g-toast-animationTime;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
        }
        &.position-middle{
            top:50%;
            transform: translate(-50%,-50%);
            .g-toast{
                animation:fade-in $g-toast-animationTime;
            }
        }
    }
    .g-toast{
        color:white;
        padding:0 16px;border-radius: 4px;background: $g-toast-bg;
        box-shadow: $g-toast-shadow;font-size:$g-toast-font-size;line-height: $g-toast-line-height;
        align-items: center;
        min-height:$g-toast-min-height;
        display: flex;
        .message{
            padding:8px 0;
        }
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