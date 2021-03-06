const expect=chai.expect
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip=false
Vue.config.devtools=false
describe('Input',()=>{
    it('存在',()=>{
        expect(Toast).to.exist
    })
    describe('接受 props',()=>{
        it('接受 autoClose',(done)=>{
            let div=document.createElement('div')
            document.body.appendChild(div)
            const Constructor=Vue.extend(Toast)
            let vm=new Constructor({
                propsData:{
                    autoClose:1
                }
            }).$mount(div)
            vm.$on('close',()=>{
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            })
            div.remove()
        })
        it('接受 closeButton',(done)=>{
            const callback=sinon.fake()
            const Constructor=Vue.extend(Toast)
            let vm=new Constructor({
                propsData:{
                    closeButton:{
                        text:"test",
                        callback
                    }
                }
            }).$mount()
            let closeButton=vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('test')
            setTimeout(()=>{
                closeButton.click()
                expect(callback).to.have.been.called
                done()
            },200)
        })
        it('接受 enableHTML',()=>{
            const Constructor=Vue.extend(Toast)
            let vm=new Constructor({
                propsData:{
                    enableHTML:true
                }
            })
            vm.$slots.default=['<strong id="test">hihihi</strong>>']
            vm.$mount()
            let strong=vm.$el.querySelector('#test')
            expect(strong).to.be.exist
        })
        it('接受 position',()=>{
            const Constructor=Vue.extend(Toast)
            let vm=new Constructor({
                propsData:{
                    position:'bottom'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
        })
    })
})