
import {Link} from 'react-router-dom';


const Header = () => {
    return <div className="header">
                Cloudont <ul>
                    <li><Link to="/login"Login</li>
                    <li>Register</li>

                </ul>
        </div>
}

export default Header;