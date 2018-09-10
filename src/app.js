import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
new Vue({
    el:'#app',
    data:{
        loading:true,
        loading1:false,
        loading2:false
    }
})


//以下为单元测试
// import chai from 'chai'
// import spies from 'chai-spies'
// let expect=chai.expect
// chai.use(spies)
// // 单元测试icon-settings
// {
//     let Constructor=Vue.extend(Button)
//     let vm=new Constructor({
//         propsData:{
//             icon:'settings'
//         }
//     })
//     vm.$mount()
//     let useElement=vm.$el.querySelector('use')
//     let expectAttribute=useElement.getAttribute('xlink:href')
//     expect(expectAttribute).to.be.eq('#i-settings')
//     vm.$el.remove()
//     vm.$destroy()
// }
// // 单元测试icon-loading
// {
//     let Constructor=Vue.extend(Button)
//     let vm=new Constructor({
//         propsData:{
//             icon:'settings',
//             loading:true
//         }
//     })
//     vm.$mount()
//     let useElement=vm.$el.querySelector('use')
//     let expectAttribute=useElement.getAttribute('xlink:href')
//     expect(expectAttribute).to.be.eq('#i-loading')
//     vm.$el.remove()
//     vm.$destroy()
// }
// // 单元测试order
// {
//     let div=document.createElement('div')
//     document.body.appendChild(div)
//     let Constructor=Vue.extend(Button)
//     let vm=new Constructor({
//         propsData:{
//             icon:'settings',
//             iconPosition:'right'
//         }
//     })
//     vm.$mount(div)
//     let svgElement=vm.$el.querySelector('svg')
//     let expectAttribute=window.getComputedStyle(svgElement).order
//     expect(expectAttribute).to.be.eq('2')
//     vm.$el.remove()
//     div.remove()
//     vm.$destroy()
// }
// // 单元测试click事件
// {
//     let Constructor=Vue.extend(Button)
//     let vm=new Constructor({
//         propsData:{
//             icon:'settings'
//         }
//     })
//     vm.$mount()
//     let spy=chai.spy(function(){})
//     vm.$on('click',spy)
//     let button=vm.$el
//     button.click()
//     expect(spy).to.have.been.called()
//     vm.$el.remove()
//     vm.$destroy()
// }