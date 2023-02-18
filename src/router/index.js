import { createRouter,createWebHistory } from 'vue-router'
import OxogMain from '../views/OxogMain.vue'
import Login from '../views/user/Login.vue'
import Community from '../views/user/Community.vue'
import UserView from '../views/user/UserView.vue'

const routes = 
        [
        {
            // path : url 주소
            path:'/',
            //component :  url 주소로 갔을 때 표실될 컴포넌트
            component:OxogMain
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/community',
            component:Community
        }, 
        {
            path:'/userView',
            component:UserView
        }

 
    ]

export const router = createRouter({
    history: createWebHistory(),
    routes
  })

