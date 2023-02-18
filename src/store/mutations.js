export default {
    SET_NEWS(state,data){ // state = state 객체받기 , context.commit한 객체 뒤에 서술 
        state.news = data
    },
    SET_JOBS(state,data){
        state.jobs = data
    },
    SET_ASK(state,data){
        state.ask = data
    },
    SET_USERDETAIL(state,data){
        state.userDetail = data
    },
    SET_COMMENTITEM(state,data){
        state.commentItem = data
    }
}