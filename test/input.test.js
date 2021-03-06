const expect=chai.expect
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip=false
Vue.config.devtools=false
describe('Input',()=>{
    it('存在',()=>{
        expect(Input).to.exist
    })
    describe('Props',()=>{
        const Constructor=Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('接收 value',()=>{
            vm=new Constructor({
                propsData:{
                    value:'123'
                }
            }).$mount()
            const inputElement=vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('123')
        })
        it('接收 disabled',()=>{
            vm=new Constructor({
                propsData:{
                    disabled:true
                }
            }).$mount()
            const inputElement=vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })
        it('接收 readonly',()=>{
            vm=new Constructor({
                propsData:{
                    readonly:true
                }
            }).$mount()
            const inputElement=vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })
        it('接收 error',()=>{
            vm=new Constructor({
                propsData:{
                    error:'错误'
                }
            }).$mount()
            const useElement=vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const spanElement=vm.$el.querySelector('span')
            expect(spanElement.innerText).to.equal('错误')
        })
    })
    describe('Events',()=>{
        const Constructor=Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('支持事件',()=>{
            ['change','focus','blur']
                .forEach((eventName)=>{
                    vm=new Constructor().$mount()
                    let callback=sinon.fake()
                    vm.$on(eventName,callback)
                    let event=new Event(eventName)
                    let inputElement=vm.$el.querySelector('input')
                    inputElement.dispatchEvent(event)
                    expect(callback).to.have.been.calledWith(event)
                })
        })
        it('支持input事件',()=>{
            vm=new Constructor().$mount()
            let callback=sinon.fake()
            vm.$on('input',callback)
            let event=new Event('input')
            Object.defineProperty(event,'target',{
                value:{value:'hi'},
                enumerable:true
            })
            let inputElement=vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith('hi')
        })
    })
})