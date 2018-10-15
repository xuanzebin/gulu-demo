<template>
    <div class="popover" @click="popoverTrigger">
        <div class="contentWrapper" v-if="visible" @click.stop>
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "GuluPopover",
        data(){
            return {
                visible:false
            }
        },
        methods:{
            popoverTrigger(){
                this.visible=!this.visible
                if (this.visible){
                    this.$nextTick(()=>{
                        let eventHandler=()=>{
                            this.visible=false
                            document.removeEventListener('click',eventHandler)
                        }
                        document.addEventListener('click',eventHandler)
                    })
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.popover{
    margin:50px;
    display:inline-block;
    position:relative;
    >.contentWrapper{
        position:absolute;
        bottom:100%;
        left:0;
        border:1px red solid;
        padding:5px;
    }
}
</style>