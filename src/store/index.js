import { createStore } from 'vuex'
//api import
import { fetchNewsList } from "../api/index.js"; 

// vuex 실행 프로세스 actions 에서 api호출 mutations 거친다음 state 에담김
// actions => mutations => state
// actions api호출 mutaions 에 commit => mutations 함수로 값담기 => state 데이터 모델에 값저장

export const store = createStore({
    state:{ // state = 데이터 모델
        //model
        news:[],
        //validate
        validateEmail: /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-Za-z0-9\\-]+/
    },
    mutations:{
        SET_NEWS(state,data){ // state = state 객체받기 , context.commit한 객체 뒤에 서술 
            state.news = data
        }
    },
    actions:{ //actions =  import 한 api 호출 관리
        FETCH_NEWS(context){
            fetchNewsList()
            .then(rs => {
                context.commit('SET_NEWS',rs.data); // context.commit();으로 뮤테이션에 값담기
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
})