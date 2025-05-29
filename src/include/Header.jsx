import {Outlet,Link} from "react-router-dom";       //outlet은 헤더랑 바디의 구분선

const Header=()=>{
    return(
        <>
        <nav>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/container" className="nav-link">부트스트랩 컨테이너</Link>
                </li>

                <li className="nav-item">
                    <Link to="/typo" className="nav-link">타이포 그래픽</Link>
                </li>
                <li className="nav-item">
                    <Link to="/color" className="nav-link">부트스트랩 기본컬러</Link>
                </li>
                <li className="nav-item">
                    <Link to="/tb" className="nav-link">테이블</Link>
                </li>
                <li className="nav-item">
                    <Link to="/img" className="nav-link">이미지</Link>
                </li>
                <li className="nav-item">
                    <Link to="/jumbo" className="nav-link">Jumbotron</Link>
                </li>
                <li className="nav-item">
                    <Link to="/alerts" className="nav-link">경고창</Link>
                </li>
                <li className="nav-item">
                    <Link to="/button" className="nav-link">버튼</Link>
                </li>
                <li className="nav-item">
                    <Link to="/badges" className="nav-link">뱃지</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>   {/*outlet을 꼭 선언해야 함,선언하지 않으면 제대로 작동하지 않음 */}
        </>
    );
}

export default Header;
