<template>
    <div class="g-tabs-item" @click="chooseTabs" :class="classes"
    :data-name="name">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name:'GuluTabsItem',
        data(){
            return {
                active:false
            }
        },
        props:{
            name:{
                type:[Number,String],
                require:true
            },
            disabled:{
                type:Boolean,
                default:false
            }
        },
        inject:['eventBus'],
        mounted(){
            if (this.eventBus){
                this.eventBus.$on('update:selected',(name)=>{
                    this.active = this.name === name
                })
            }
        },
        methods:{
            chooseTabs(){
                if (this.disabled) return
                if (this.eventBus){
                    this.eventBus.$emit('update:selected',this.name,this)
                }
                this.$emit('click',this)
            }
        },
        computed:{
            classes(){
                return {
                    active:this.active,
                    disabled:this.disabled
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    $active-color: #4A90E2;
    $disabled-color:grey;
    .g-tabs-item{
        display: flex;
        justify-content: center;
        align-items: center;
        padding:0 2em;
        height:40px;
        border-top-left-radius:4px;
        border-top-right-radius:4px;
        &.active{
            color:$active-color;
            font-weight:bold;
        }
        &.disabled{
            color:$disabled-color;
            cursor: not-allowed;
        }
    }
</style>