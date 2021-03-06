import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Sider from './sider'
import Toast from './toast'
import plugin from "./plugin"
import Tabs from "./tabs"
import TabsHead from "./tabs-head"
import TabsBody from "./tabs-body"
import TabsItem from "./tabs-item"
import TabsPane from "./tabs-pane"
import Popover from './popover'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-content',Content)
Vue.component('g-header',Header)
Vue.component('g-footer',Footer)
Vue.component('g-sider',Sider)
Vue.component('g-toast',Toast)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-popover',Popover)
Vue.use(plugin)

new Vue({
    el:'#app',
    data:{
        loading:true,
        loading1:false,
        loading2:false,
        message:'宣',
        selectedTabs:'girls'
    },
    methods:{
        showToast1(){
            this.$toast('我是message',{
                closeButton:{
                    text:'hi',
                    callback:()=>{
                        console.log('我知道你点击我了')
                    }
                },
                position:'top'
            })
        },
        showToast2(){
            this.$toast('我是message',{
                closeButton:{
                    text:'hi',
                    callback:()=>{
                        console.log('我知道你点击我了')
                    }
                },
                position:'middle'
            })
        },
        showToast3(){
            this.$toast('我是message',{
                closeButton:{
                    text:'hi',
                    callback:()=>{
                        console.log('我知道你点击我了')
                    }
                },
                position:'bottom'
            })
        }
    }
})