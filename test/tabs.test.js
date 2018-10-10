const expect=chai.expect
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from "../src/tabs-head"
import TabsBody from "../src/tabs-body"
import TabsItem from "../src/tabs-item"
import TabsPane from "../src/tabs-pane"

Vue.config.productionTip=false
Vue.config.devtools=false

Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
describe('Tabs',()=>{
    it('存在',()=>{
        expect(Tabs).to.exist
    })
    it('tabs接受一个selected',(done)=>{
        let div=document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML=`
        <g-tabs selected="girls">
            <g-tabs-head>
                <g-tabs-item name="girls">美女</g-tabs-item>
                <g-tabs-item name="cars">汽车</g-tabs-item>
                <g-tabs-item name="cloths">衣服</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="girls">美女相关资讯</g-tabs-pane>
                <g-tabs-pane name="cars">汽车相关资讯</g-tabs-pane>
                <g-tabs-pane name="cloths">衣服相关资讯</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
        `
        let vm=new Vue({
            el:div
        })
        vm.$nextTick(()=>{
            let targetVm=vm.$el.querySelector('.g-tabs-item[data-name="girls"]')
            expect(targetVm.classList.contains('active')).to.eq(true)
            done()
        })
    })
})