<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
    let validator=(value)=>{
        let keys=Object.keys(value)
        let valid=true
        keys.forEach(key=>{
            if (!['span','offset'].includes(key)){
                valid=false
            }
        })
        return valid
    }
    export default{
        name:'GuluCol',
        props:{
            span:{
                type:[Number,String]
            },
            offset:{
                type:[Number,String]
            },
            ipad:{type:Object, validator},
            narrowPc:{type:Object, validator},
            pc:{type:Object, validator},
            widePc:{type:Object, validator}
        },
        data(){
            return {
                gutter:0
            }
        },
        computed:{
            colStyle(){
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                }
            },
            colClass(){
                let {span,offset,ipad,narrowPc,pc,widePc}=this
                let createClasses=this.createClasses
                return [
                    ...createClasses({span,offset}),
                    ...createClasses(ipad,'ipad-'),
                    ...createClasses(narrowPc,'narrow-pc-'),
                    ...createClasses(pc,'pc-'),
                    ...createClasses(widePc,'wide-pc-')
                ]
            }
        },
        methods:{
            createClasses(obj,str=''){
                let array=[]
                if (!obj){return array}
                if (obj.span){
                    array.push(`col-${str}${obj.span}`)
                }
                if (obj.offset){
                    array.push(`offset-${str}${obj.offset}`)
                }
                return array
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
        @media (min-width:576px){
            $class:col-ipad-;
            @for $n from 1 through 24{
                &.#{$class}#{$n}{
                    width:($n/24)*100%;
                }
            }
            $class:offset-ipad-;
            @for $n from 1 through 24{
                &.#{$class}#{$n}{
                    margin-left:($n/24)*100%;
                }
            }
        }
        @media (min-width:768px){
            $class:col-narrow-pc-;
            @for $n from 1 through 24{
                &.#{$class}#{$n}{
                    width:($n/24)*100%;
                }
            }
            $class:offset-narrow-pc-;
            @for $n from 1 through 24{
                &.#{$class}#{$n}{
                    margin-left:($n/24)*100%;
                }
            }
        }
        @media (min-width:992px){
            $class:col-pc-;
            @for $n from 1 through 24{
                &.#{$class}#{$n}{
                    width:($n/24)*100%;
                }
            }
            $class:offset-pc-;
            @for $n from 1 through 24{
                &.#{$class}#{$n}{
                    margin-left:($n/24)*100%;
                }
            }
        }
        @media (min-width:1200px){
            $class:col-wide-pc-;
            @for $n from 1 through 24{
                &.#{$class}#{$n}{
                    width:($n/24)*100%;
                }
            }
            $class:offset-wide-pc-;
            @for $n from 1 through 24{
                &.#{$class}#{$n}{
                    margin-left:($n/24)*100%;
                }
            }
        }
    }
</style>