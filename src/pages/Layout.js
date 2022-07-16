import { Outlet, Link } from "react-router-dom";
import './layoutStyleSheet.css';
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
                        <Link to="/" style={{color:"red"}}>Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs" style={myStyle}>Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={'linkText'}>Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout;