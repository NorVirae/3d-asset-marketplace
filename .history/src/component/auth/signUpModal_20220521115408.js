import LoootyLogo from "../loootyLogo";
import {FaFacebookF} from "react"


const SignUpModal = () => {
    return(

        <div className="reg__sign-up-overlay">
            <section className="reg__sign-up-modal">
                <div className="reg__loooty-innitials-container">
                    <div className="reg_logo-container">
                        <LoootyLogo style={{backgroundColor: "blue", width: "10rem"}}/>
                    </div>
                    <div className="reg__loooty-about">
                        Welcome to Loooty.
                        the best is about to get better!
                    </div>

                    <ul className="reg__loooty-features">
                        <li className="reg__loooty-features-item">Advance search and filtering options</li>
                        <li className="reg__loooty-features-item">Add art work to custom selection</li>
                        <li className="reg__loooty-features-item">Never miss a new artwork with tag</li>
                        <li className="reg__loooty-features-item">Uploader and collection suscription</li>


                    </ul>
                </div>

                <div className="reg__sign-up-forms-container">
                    <form className="reg__sign-up-form">
                        <div className="reg__form-group">
                            <input className="reg__form-control" placeholder="Username / Email"/>
                        </div>

                        <div className="reg__form-group">
                            <input className="reg__form-control" placeholder="Username / Email"/>
                        </div>

                        <div className="reg__form-group">
                            <input className="reg__form-control" placeholder="Username / Email"/>
                        </div>

                        <div className="reg__form-group">
                            <input className="reg__form-control" placeholder="Username / Email"/>
                        </div>

                        <div className="lgn__form-btn-group">
                            <button className="lgn__login-btn">
                                <span className="lgn__login-btn-text">SIGN UP</span>
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
           </section>
        </div>
        
    )
}

export default SignUpModal;