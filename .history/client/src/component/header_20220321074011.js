
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';


const Header = () => {
    const user = useSelector(state=>state.user)
    return <div className="header">
                <span className="logo">Cloudont</span> 
                <ul>
                    <li><Link to="/login">Login</Link></li>
                   {user?<li><Link to="/login">Logout</Link></li>:<>
                   
                   <li><Link to="/register">Register</Link></li></>} 
                    <li><Link to="/file/manager">File&nbsp;Manager</Link></li>
                    <li><Link to="/">Upload&nbsp;File</Link></li>


                </ul>
        </div>
}

export default Header;