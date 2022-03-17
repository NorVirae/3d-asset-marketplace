
import {Link} from 'react-router-dom';


const Header = () => {
    return <div className="header">
                <span className="logo">Cloudont</span> 
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/file/manager">File&nbsp;Manager</Link></li>
                    <li><Link to="/">File&nbsp;Manager</Link></li>


                </ul>
        </div>
}

export default Header;