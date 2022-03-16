
import {Link} from 'react-router-dom';


const Header = () => {
    return <div className="header">
                Cloudont <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/login">Login</Link>Register</li>

                </ul>
        </div>
}

export default Header;