
import "./auth.css"
import googleImg from 

const LoginModal = ({}) => {
    return <div className="lgn__login-modal"> 
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
                            <img src={} alt =""/><span className="lgn__btn-google-text">Sign in with Google</span>
                        </button>
                        <button className="lgn__btn-facebook">
                            <span className="lgn__btn-facebook-text">Sign in with Facebook</span>
                        </button>
                        <div className="lgn__form-recovery-container">
                            <p> Don't have an account? <span style={{color: "#FF9700"}}>Sign up! </span></p>
                        </div>
                    </div>

                    
                </form>
            </div>
}

export default LoginModal;