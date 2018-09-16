const expect=chai.expect
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip=false
Vue.config.devtools=false
describe('Row',()=>{
    it('存在',()=>{
        expect(Row).to.exist
    })
    describe('Props',()=>{
        it('接收 gutter',(done)=>{
            Vue.component('g-row',Row)
            Vue.component('g-col',Col)
            const div=document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML=`
                <g-row gutter="10">
                    <g-col span="12"></g-col>
                    <g-col span="12"></g-col>
                </g-row>
            `
            const vm=new Vue({
                el:div
            })
            setTimeout(()=>{
                const cols=vm.$el.querySelectorAll('.col')
                const row=vm.$el.querySelector('.row')
                expect(getComputedStyle(row).marginLeft).to.eq('-5px')
                expect(getComputedStyle(row).marginRight).to.eq('-5px')
                expect(getComputedStyle(cols[0]).paddingLeft).to.eq('5px')
                expect(getComputedStyle(cols[1]).paddingRight).to.eq('5px')
                done()
                div.remove()
                vm.$destroy()
            })
        })

        it('接受 align',()=>{
            let div=document.createElement('div')
            document.body.appendChild(div)
            const Constructor=Vue.extend(Row)
            let vm=new Constructor({
                propsData:{
                    align:'center'
                }
            }).$mount(div)
            expect(getComputedStyle(vm.$el).justifyContent).to.eq('center')
            div.remove()
            vm.$destroy()
        })
    })
})