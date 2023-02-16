// api 를 호출해야해서 api import
import { fetchNewsList,fetchJobsList } from "../api/index.js"; 

export default {
    //actions =  import 한 api 호출
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
