const expect=chai.expect
import Vue from 'vue'
import TabsItem from "../src/tabs-item"

Vue.config.productionTip=false
Vue.config.devtools=false

describe('TabsItem',()=>{
    it('存在',()=>{
        expect(TabsItem).to.exist
    })
    it('TabsItem接受一个name',()=>{
        const Constructor=Vue.extend(TabsItem)
        let vm=new Constructor({
            propsData:{
                name:'xxx'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
    })
    it('TabsItem接受一个disabled',()=>{
        const Constructor=Vue.extend(TabsItem)
        let vm=new Constructor({
            propsData:{
                disabled:true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.eq(true)
        const callback=sinon.fake()
        vm.$on('click',callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
    })
})