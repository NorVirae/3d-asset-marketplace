


const LoginModal = ({}) => {
    return <div className="lgn__login-modal"> 
                <form className="lgn__login-form">
                    <div className="lgn__form-group">
                        <input className="lgn__form-control" />
                    </div>

                    <div className="lgn__form-group">
                        <input className="lgn__form-control" />
                    </div>

                    <div className="lgn__form-recovery-container">
                        <p> Forgot your Password / Username?</p>
                    </div>

                    <div className="lgn__form-recovery-container">
                        <p> Forgot your Password / Username?</p>
                    </div>

                    <div className="lgn__form-btn-group">
                        <button>SIGN IN</button>
                    </div>

                    <div className="lgn__login-alternatives-container">
                        <button className="lgn__btn-goole">Sign in with Google</button>
                        <button className="lgbn">Sign in with Facebook</button>

                    </div>

                </form>
            </div>
}

export default LoginModal;