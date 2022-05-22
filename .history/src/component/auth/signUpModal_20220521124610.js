import LoootyLogo from "../loootyLogo";
import {FaFacebookF} from "react-icons/fa"
import googleImg from "../../assets/image/auth/google.svg"
import CheckButtons from "../buttons/checkButtons";



const SignUpModal = () => {
    return(

        <div className="reg__sign-up-overlay">
            <section className="reg__sign-up-modal">
                <div className="reg__loooty-innitials-container">
                    <div className="reg_logo-container">
                        <LoootyLogo style={{ width: "10rem"}}/>
                    </div>
                    <div className="reg__loooty-about">
                        <div>Welcome to Loooty.</div>
                        <div style={{width: "70%"}}>The best is about to get better!</div>
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

                        <div className="reg__terms-container">
                            <CheckButtons />
                            You agree to the <span style={{color: "#FF9700"}}></span>Terms of Use &amp; Privacy policy
                        </div>

                        <div className="reg__form-btn-group">
                            <button className="reg__login-btn">
                                <span className="reg__login-btn-text">SIGN UP</span>
                            </button>
                        </div>

                        <div className="reg__login-alternatives-container">
                            <button className="reg__btn-google">
                                <img style={{width: "25px", transform: "skewX(15deg)"}} src={googleImg} alt =""/>
                                <span className="reg__btn-google-text">Sign in with Google</span>
                            </button>
                            <button className="reg__btn-facebook">
                                <FaFacebookF style={{fontSize: "1.3rem", transform: "skewX(15deg)"}} />
                                <span className="reg__btn-facebook-text">
                                    Sign in with Facebook
                                </span>
                            </button>
                            <div className="reg__form-recovery-container">
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