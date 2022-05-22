
import "./auth.css"

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
                            <span className="">SIGN IN</span>
                        </button>
                    </div>

                    <div className="lgn__login-alternatives-container">
                        <button className="lgn__btn-google">Sign in with Google</button>
                        <button className="lgn__btn-facebook">Sign in with Facebook</button>
                    </div>

                    <div className="lgn__form-recovery-container">
                        <p> Don't have an account? Sign up! </p>
                    </div>
                </form>
            </div>
}

export default LoginModal;