import {Outlet,Link} from "react-router-dom";       //outlet은 헤더랑 바디의 구분선

const Header=()=>{
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/container">부트스트랩 컨테이너</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>   {/*outlet을 꼭 선언해야 함,선언하지 않으면 제대로 작동하지 않음 */}
        </>
    )
}

export default Header;
