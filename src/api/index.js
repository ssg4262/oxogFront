import axios from 'axios' //'axios' pakage.json 에있는 라이브러리 호출

//1.Http Request & Response 와 관련된 기본 설정
const config={
    baseUrl:'https://api.hnpwa.com/v0/'
}

//2.api 정렬

//뉴스 조회 api
function fetchNewsList(){
    return axios.get(config.baseUrl+"news/1.json")   
}
function fetchJobsList(){
    return axios.get(config.baseUrl+"jobs/1.json")
}
//커뮤니티 리스트 조회 api
function communityList(){
    return null;
}

// 호출값 export 해줘야 다른 파일에서 불러오기가능!
export {
    fetchNewsList,
    fetchJobsList
}