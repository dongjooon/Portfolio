function Project1(){
    return(
        <div>
            <article>
                <h3>Project1</h3>
                <table border="1" className="prj1">
                    <tr><td>Project Name</td><td>판매를 위한 웹페이지 개발</td></tr>
                    <tr><td>Project Period</td><td>2023.12~2024.01</td></tr>
                    <tr><td>Project Member</td><td>3명</td></tr>
                    <tr><td>Project Explanation</td><td>게임을 리뷰하고 게임 공략을 제공하며 인게임 구매의 효율과 같은 것을 제공한다.
                    그리고 유료 게임인 경우 판매한다.</td></tr>
                    <tr><td>Project Role</td><td>웹페이지의 프론트엔드 개발 및 구상</td></tr>
                </table>
                <br/>
                <div style={{fontSize:"20px", fontWeight:"bold"}}>프로젝트 개요 : </div>
                <div>게임을 만드는 것도 중요하지만 어떻게 판매를 하는가에 <br/>
                대해서도 생각을 하다가 진행한 프로젝트</div>
                <img src="/uml.jpg" alt="no img" style={{width:"250px" ,position:"relative",left:"450px", bottom:"60px"}}></img>
            </article>
            
        </div>
    ) 
}
export default Project1;