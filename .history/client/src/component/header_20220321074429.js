
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';


const Header = () => {
    const user = true
    return <div className="header">
                <span className="logo">Cloudont</span> 
                <ul>
                   {user?<><li><Link to="/logout">Logout</Link></li> <li><Link to="/">Upload&nbsp;File</Link></li><li><Link to="/file/manager">File&nbsp;Manager</Link></li></>:<>
                        
                        <li><Link to="/login">Login</Link></li>

                        <li><Link to="/register">Register</Link></li>
                   
                   </>} 
                   


                </ul>
        </div>
}

export default Header;