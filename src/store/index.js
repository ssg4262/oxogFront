//import
import { createStore } from 'vuex'
//api import

import mutations from './mutations.js';
import actions from './actions.js';


// vuex 실행 프로세스 actions 에서 api호출 mutations 거친다음 state 에담김
// actions => mutations => state
// actions api호출 mutaions 에 commit => mutations 함수로 값담기 => state 데이터 모델에 값저장

export const store = createStore({
    state:{ // state = 데이터 모델
        //model
        news:[],
        jobs:[],
        //validate
        validateEmail:/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    },
    getters:{ //컴퓨티드랑 동일한 속성 다만 스토어에 있음 // 화면에서 디스패치를 안해도됨
        fetchNews(state){
            return state.news
        }
    },
    mutations,//mutations = state에 넣어줌  
    actions
})