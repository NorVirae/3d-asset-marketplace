
import "./auth.css"
import googleImg from "../../assets/image/auth/google.svg"
import {FaFacebookF} from "react-icons/fa"

const LoginModal = ({}) => {
    return <div className="lgn__login-modal">
                <arro 
                <form className="lgn__login-form">
                    <div className="lgn__form-group">
                        <input className="lgn__form-control" placeholder="Username / Email"/>
                    </div>

                    <div className="lgn__form-group">
                        <input className="lgn__form-control" placeholder="Password"/>
                    </div>

                    <div className="lgn__form-recovery-container">
                        <p> Forgot your <span style={{color: "#FF9700"}}>Password / Username?</span></p>
                    </div>

                    <div className="lgn__form-btn-group">
                        <button className="lgn__login-btn">
                            <span className="lgn__login-btn-text">SIGN IN</span>
                        </button>
                    </div>

                    <div className="lgn__login-alternatives-container">
                        <button className="lgn__btn-google">
                            <img style={{width: "25px", transform: "skewX(15deg)"}} src={googleImg} alt =""/>
                            <span className="lgn__btn-google-text">Sign in with Google</span>
                        </button>
                        <button className="lgn__btn-facebook">
                            <FaFacebookF style={{fontSize: "1.3rem", transform: "skewX(15deg)"}} />
                            <span className="lgn__btn-facebook-text">
                                Sign in with Facebook
                            </span>
                        </button>
                        <div className="lgn__form-recovery-container">
                            <p> Don't have an account? <span style={{color: "#FF9700"}}>Sign up! </span></p>
                        </div>
                    </div>

                    
                </form>
            </div>
}

export default LoginModal;