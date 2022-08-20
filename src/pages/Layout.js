import { Outlet, Link } from "react-router-dom";
import '../styles/layoutStyleSheet.css';
function Layout () {
    const myStyle = {
        color:"white",
        backgroundColor:"black",
    }
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/" style={{color:"red"}}>useRef</Link>
                    </li>
                    <li>
                        <Link to="/useState" style={myStyle}>useState</Link>
                    </li>
                    <li>
                        <Link to="/useEffect" className={'linkText'}>useEffect</Link>
                    </li>
                    <li>
                        <Link to="/useContext">useContext</Link>
                    </li>
                    <li>
                        <Link to="/useCallback">useCallback</Link>
                    </li>
                    <li>
                        <Link to="/useMemo">useMemo</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout;