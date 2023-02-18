import { createRouter,createWebHistory } from 'vue-router'
import OxogMain from '../views/OxogMain.vue'
import Login from '../views/user/Login.vue'
import NewsView from '../views/user/NewsView.vue'
import JobsView from '../views/user/JobsView.vue'
import UserView from '../views/user/UserView.vue'
import AskView from '../views/user/AskView.vue'
import ItemView from '../views/user/ItemView.vue'


const routes = 
        [
        {
            // path : url 주소
            path:'/',
            //component :  url 주소로 갔을 때 표실될 컴포넌트
            component:OxogMain
        },
        {
            path:'/news',
            component:NewsView
        }, 
        {
            path:'/ask',
            component:AskView
        },
        {
            path:'/jobs',
            component:JobsView
        },
        //user
        {
            path:'/user/:id',//id 파라미터로 넘기기
            component:UserView
        },
        {
            path:'/login',
            component:Login
        },
        //item
        {
            path:'/item/:id',//id 파라미터로 넘기기
            component:ItemView
        },

 
    ]

export const router = createRouter({
    history: createWebHistory(),
    routes
  })

