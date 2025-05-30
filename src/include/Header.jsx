import { Outlet,Link } from "react-router-dom"; /*헤더랑 바디 분리*/

const Header = () => {
    return(
        <>
        <nav>
            <ul className="nav">
                <li className="nav-item"> 
                    <Link to="/" className="nav-link mb-5 mt-2 text-danger">Home</Link> {/*버튼을 감싸서 url을 연결*/}
                </li>
                <li className="nav-item">
                    <Link to="/container" className="nav-link mb-5 mt-2 text-secondary">Bootstarp_Container</Link>
                </li>
                <li className="nav-item">
                    <Link to="/typo" className="nav-link mb-5 mt-2 text-secondary">Typography</Link>
                </li>
                <li className="nav-item">
                    <Link to="/color" className="nav-link mb-5 mt-2 text-secondary">Bootstrap_basic_color</Link>
                </li>
                <li className="nav-item">
                    <Link to="/table" className="nav-link mb-5 mt-2 text-secondary">Table</Link>
                </li>
                <li className="nav-item">
                    <Link to="/img" className="nav-link mb-5 mt-2 text-secondary">Image</Link>
                </li>
                <li className="nav-item">
                    <Link to="/jumbo" className="nav-link mb-5 mt-2 text-secondary">Jumbotron</Link>
                </li>
                <li className="nav-item">
                    <Link to="/alerts" className="nav-link mb-5 mt-2 text-secondary">Alerts</Link>
                </li>
                <li className="nav-item">
                    <Link to="/btn" className="nav-link mb-5 mt-2 text-secondary">Button</Link>
                </li>
                <li className="nav-item">
                    <Link to="/badges" className="nav-link mb-5 mt-2 text-secondary">Badges</Link>
                </li>
                <li className="nav-item">
                    <Link to="/progress" className="nav-link mb-5 mt-2 text-secondary">Progress bar</Link>
                </li>
                <li className="nav-item">
                    <Link to="/cards" className="nav-link mb-5 mt-2 text-secondary">Cards</Link>
                </li>
                <li className="nav-item">
                    <Link to="/layer" className="nav-link mb-5 mt-2 text-secondary">Layer</Link>
                </li>
                <li className="nav-item">
                    <Link to="/toastm" className="nav-link mb-5 mt-2 text-secondary">Toastm</Link>
                </li>
            </ul>
        </nav>
        <Outlet/> {/*선언하지 않으면 제대로 작동하지 않음*/}
        </>
    )
}
export default Header;