import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/hi'
import Test1 from '@/components/test'
import Module from '@/components/module'
import ModuleBox from '@/components/moduleBox'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/Hi',
        name: "Hi",
        component: Hi
    }, {
        path: '/Test1',
        name: 'Test',
        component: Test1
    }, {
        path: '/Module',
        name: 'Module',
        component: Module
    }]
})