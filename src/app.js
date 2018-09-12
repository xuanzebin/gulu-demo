import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
console.log(Icon)
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
new Vue({
    el:'#app',
    data:{
        loading:true,
        loading1:false,
        loading2:false,
        message:'宣'
    },
    methods:{
        inputKey(e){
            console.log(e.target.value)
        }
    }
})