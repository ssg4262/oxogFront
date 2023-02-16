import { createStore } from 'vuex'
//api import
import { fetchNewsList,fetchJobsList } from "../api/index.js"; 

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
    mutations:{ //mutations = state에 넣어줌
        SET_NEWS(state,data){ // state = state 객체받기 , context.commit한 객체 뒤에 서술 
            state.news = data
        },
        SET_JOBS(state,data){
            state.jobs = data
        }
        
    },
    actions:{ //actions =  import 한 api 호출
        FETCH_NEWS(context){
            fetchNewsList()
            .then(rs => {
                context.commit('SET_NEWS',rs.data); // context.commit();으로 뮤테이션에 값담기
            })
            .catch(err => {
                console.log(err)
            })
        },
        FETCH_JOBS({commit}){//컨텍스트 객체안에 commit 인자(속성) 바로 가져오기
            fetchJobsList()
            .then(({data})=>{ //({data}) 로 바로 받기
                commit('SET_JOBS',data)
                console.log(data)
            })
            .catch(err=>{
                console.log(err+"jobsError")
            })
        }
    }
})