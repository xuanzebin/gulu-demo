<template>
    <div class="popover" @click="popoverTrigger">
        <div class="contentWrapper" v-if="visible"
        ref="contentWrapper">
            <slot name="content"></slot>
        </div>
        <span class="triggerButton" ref="triggerButton">
            <slot></slot>
        </span>
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
                        document.body.appendChild(this.$refs.contentWrapper)
                        let {width,height,left,top}=this.$refs.triggerButton.getBoundingClientRect()
                        this.$refs.contentWrapper.style.left=left+window.scrollY+'px'
                        this.$refs.contentWrapper.style.top=top+window.scrollX+'px'
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
}
.contentWrapper{
    position:absolute;
    border:1px red solid;
    padding:5px;
    transform: translateY(-100%);
}
</style>