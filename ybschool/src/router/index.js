import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const NewHand = () => import('../views/new/NewHand')
const Class = () => import('../views/class/Class')
const DataCommunity = () => import('../views/DataCommunity/DataCommunity')

//1.使用router
Vue.use(VueRouter)

//创建路由
const routes = [
    {
        path:'',
        redirect:'/home',
    },
    {
        path:'/home',
        component:Home,
    },
    {
        path:'/newhand',
        component:NewHand
    },
    {
        path:'/class',
        component:Class,
    },
    {
        path:'/datacommunity',
        component:DataCommunity,
    }
]

// 3.导出路由
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router