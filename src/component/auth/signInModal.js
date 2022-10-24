import LoootyLogo from "../loootyLogo";
import {FaEyeSlash, FaFacebookF} from "react-icons/fa"
import googleImg from "../../assets/image/auth/google.svg"
import CheckButtons from "../buttons/checkButtons";
import { useContext, useState } from "react";
import { RegisterContext } from "./context/registerContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInAction, signUpAction } from "../../api/auth";
import { useDispatch } from "react-redux";
import { BsEyeFill } from "react-icons/bs";



const SignInModal = () => {
    const [active, setActive] = useState(false)
    const [fadeOut, setFadeOut] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loginInfo, setLoginInfo] = useState({email: '', password: ''})
    const [isLoading, setIsLoading] = useState(false)

    const handleSignIn = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const signUpData = await dispatch(signInAction({signInData: loginInfo})).unwrap()
        .then(async (result) => {
            console.log(result)
            setIsLoading(false)
            toast.success("Sign in was successful")

            setShowRegModal({...showRegModal, login:false})
            navigate("/user")
        })
        .catch((err) => {
            setIsLoading(false)
            // console.log(signUpData, "UL")
            if (err.response){
                toast.error(err.response.data.message)
            }

        })
           
       
    }


    
    const [showRegModal, setShowRegModal] = useContext(RegisterContext)
    const [hidePassword, setHidePassword] = useState(true)
    return(

        <div className={`reg__sign-up-overlay ${fadeOut? "lgn__fade-out-anim" : ""}`}>
            <section className="reg__sign-up-modal">
                <div className="reg__close-btn-container">
                    <div 
                        onClick={e=>{
                            setFadeOut(prev => !prev)
                            setTimeout(() =>{
                                setShowRegModal({...showRegModal, login: false})
                                //  setFadeOut(false)
                                }, 600)}}
                    className="reg__close-btn">
                        <span className="reg__close-btn-text">X</span>
                    </div>
                </div>
                <div className="reg__loooty-innitials-container">
                    <div className="reg_logo-container">
                        <LoootyLogo style={{ width: "15rem"}}/>
                    </div>
                    <div className="reg__loooty-about">
                    
                        <div>Welcome back, Cap'n</div>
                    </div>

                    <ul className="reg__loooty-features">
                        <li className="reg__loooty-features-item">Advance search and filtering options</li>
                        <li className="reg__loooty-features-item">Add art work to custom selection</li>
                        <li className="reg__loooty-features-item">Never miss a new artwork with tag</li>
                        <li className="reg__loooty-features-item">Uploader and collection suscription</li>


                    </ul>
                </div>

                <div className="reg__sign-up-forms-container">
                                
                    <form onSubmit={handleSignIn} className="reg__sign-up-form">
                        <div className="reg__form-group-container">
                            
                            <div className="reg__form-group">
                                <input type={"email"} onChange={e => setLoginInfo(old =>({...old, email: e.target.value}))} value={loginInfo.email} className="reg__form-control" placeholder=" Email"/>
                            </div>

                            <div className="reg__form-group">
                                <input autoComplete="off" type={hidePassword? "password": "text"} onChange={e => setLoginInfo(old =>({...old, password: e.target.value}))} value={loginInfo.password} className="reg__form-control" placeholder="Password"/>
                                <span onClick={() => setHidePassword(!hidePassword)} className="sign__hide-sensitive-info-button">
                                    {hidePassword? <BsEyeFill className="lgn__hide-sensitive-ib-icon"/> : <FaEyeSlash className="lgn__hide-sensitive-ib-icon"/>}
                                </span>
                            </div>

                        </div>

                        <div className="reg__terms-container">
                            {/* <CheckButtons active={active} setActive={setActive}/> */}
                            Forgot Your <span style={{color: "#FF9700", cursor: "pointer"}}>Password / Username</span>
                        </div>

                        <div className="reg__form-btn-group">
                            <button className="reg__login-btn">
                                <span className="reg__login-btn-text">{isLoading ? "loading..." : "SIGN IN"}</span>
                            </button>
                        </div>

                        <div className="reg__login-alternatives-container">
                            <button className="reg__btn-google">
                                <img style={{width: "25px", transform: "skewX(25deg)"}} src={googleImg} alt =""/>
                                <span className="reg__btn-google-text">Sign&nbsp;In&nbsp;with&nbsp;Google</span>
                            </button>
                            
                            <button onClick={e => navigate("/user")} className="reg__btn-facebook">
                                <FaFacebookF style={{fontSize: "1.3rem", transform: "skewX(25deg)"}} />
                                <span className="reg__btn-facebook-text">
                                    Sign&nbsp;In&nbsp;with&nbsp;Facebook
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

export default SignInModal;