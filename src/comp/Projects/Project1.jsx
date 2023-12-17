function Project1(){
    return(
        <div>
            <article>
                <h3>Project1</h3>
                <table border="1" style={{width:"420px"}}>
                    <tr><td>Project Name</td><td>판매를 위한 웹페이지 개발</td></tr>
                    <tr><td>Project Period</td><td>2023.12~2024.01</td></tr>
                    <tr><td>Project Member</td><td>3명</td></tr>
                    <tr><td>Project Explanation</td><td>
                        게임을 리뷰하고 게임 공략을 제공하며 인게임 아이템 구매의 효율과 가성비 정보를 제공한다.
                        유료 게임인 경우 게임을 판매한다.
                    </td></tr>
                    <tr><td>Project Role</td><td>웹페이지의 프론트엔드 개발 및 구상</td></tr>
                </table>
                <br/>
                <div className="gayo">프로젝트 개요 : </div>
                <div>
                    온라인 쇼핑몰의 게임 버전<br/>
                    유명 게임 플랫폼인 STEAM을 웹으로 구현
                </div>    
                <img src="/uml.jpg" alt="no img" style={{width:"250px" ,position:"relative",left:"450px", bottom:"260px"}}></img>
            </article>
            
        </div>
    ) 
}
export default Project1;