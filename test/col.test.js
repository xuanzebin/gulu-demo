const expect=chai.expect
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip=false
Vue.config.devtools=false
describe('Col',()=>{
    it('存在',()=>{
        expect(Col).to.exist
    })
    describe('Props',()=>{
        it('接收 span',()=>{
            const Constructor=Vue.extend(Col)
            let vm=new Constructor({
                propsData:{
                    span:'1'
                }
            }).$mount()
            expect(vm.$el.classList.contains('col-1')).to.eq(true)
            vm.$destroy()
        })
        it('接收 offset',()=>{
            const Constructor=Vue.extend(Col)
            let vm=new Constructor({
                propsData:{
                    offset:'1'
                }
            }).$mount()
            expect(vm.$el.classList.contains('offset-1')).to.eq(true)
            vm.$destroy()
        })
        it('接收 ipad 属性',()=>{
            const Constructor=Vue.extend(Col)
            let vm=new Constructor({
                propsData:{
                    ipad:{span:'1',offset:'1'}
                }
            }).$mount()
            expect(vm.$el.classList.contains('col-ipad-1')).to.eq(true)
            expect(vm.$el.classList.contains('offset-ipad-1')).to.eq(true)
            vm.$destroy()
        })
        it('接收 narrowPc 属性',()=>{
            const Constructor=Vue.extend(Col)
            let vm=new Constructor({
                propsData:{
                    narrowPc:{span:'1',offset:'1'}
                }
            }).$mount()
            expect(vm.$el.classList.contains('col-narrow-pc-1')).to.eq(true)
            expect(vm.$el.classList.contains('offset-narrow-pc-1')).to.eq(true)
            vm.$destroy()
        })
        it('接收 pc 属性',()=>{
            const Constructor=Vue.extend(Col)
            let vm=new Constructor({
                propsData:{
                    pc:{span:'1',offset:'1'}
                }
            }).$mount()
            expect(vm.$el.classList.contains('col-pc-1')).to.eq(true)
            expect(vm.$el.classList.contains('offset-pc-1')).to.eq(true)
            vm.$destroy()
        })
        it('接收 widePc 属性',()=>{
            const Constructor=Vue.extend(Col)
            let vm=new Constructor({
                propsData:{
                    widePc:{span:'1',offset:'1'}
                }
            }).$mount()
            expect(vm.$el.classList.contains('col-wide-pc-1')).to.eq(true)
            expect(vm.$el.classList.contains('offset-wide-pc-1')).to.eq(true)
            vm.$destroy()
        })
    })
})