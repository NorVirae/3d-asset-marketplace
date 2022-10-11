import LoootyLogo from "../loootyLogo";
import {FaFacebookF} from "react-icons/fa"
import googleImg from "../../assets/image/auth/google.svg"
import CheckButtons from "../buttons/checkButtons";
import { useContext, useState } from "react";
import { RegisterContext } from "./context/registerContext";
import { useNavigate } from "react-router-dom";



const SignUpModal = () => {
    const [active, setActive] = useState(false)
    const [fadeOut, setFadeOut] = useState(false)
    const [showRegModal, setShowRegModal] = useContext(RegisterContext)
    const [isLoading, setIsLoading] = useState(false)
    const [regInfo, setRegInfo] = useState({
        userName: "",
        email: "",
        password: "",
        rePassword: ""
    })

    const handleSignUp = (e) => {
        try {
            e.preventDefault()
            setIsLoading(true)
        }catch(err){
            setIsLoading(true)

        }
       
    }

    return(

        <div className={`reg__sign-up-overlay ${fadeOut? "lgn__fade-out-anim" : ""}`}>
            <section className="reg__sign-up-modal">
                <div className="reg__close-btn-container">
                    <div 
                        onClick={()=>{
                            setFadeOut(prev => !prev)
                            setTimeout(() =>{
                                setShowRegModal({...showRegModal, register: false})
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
                    

                        <div>Welcome to our little vault.</div>
                        <div style={{width: "75%"}}>Grab your loot!</div>
                    </div>

                    <ul className="reg__loooty-features">
                        <li className="reg__loooty-features-item">Advance search and filtering options</li>
                        <li className="reg__loooty-features-item">Add art work to custom selection</li>
                        <li className="reg__loooty-features-item">Never miss a new artwork with tag</li>
                        <li className="reg__loooty-features-item">Uploader and collection suscription</li>


                    </ul>
                </div>

                <div className="reg__sign-up-forms-container">
                    <form onSubmit={handleSignUp} className="reg__sign-up-form">
                        <div className="reg__form-group-container">

                        
                            <div className="reg__form-group">
                                <input onChange={e => setRegInfo(old => ({...old, userName: e.target.value.target}))} value={regInfo.userName} className="reg__form-control" placeholder="Username"/>
                            </div>

                            <div className="reg__form-group">
                                <input onChange={e => setRegInfo(old => ({...old, email: e.target.value.target}))} value={regInfo.email} className="reg__form-control" placeholder=" Email"/>
                            </div>

                            <div className="reg__form-group">
                                <input onChange={e => setRegInfo(old => ({...old, password: e.target.value.target}))} value={regInfo.password} className="reg__form-control" placeholder="Password"/>
                            </div>

                            <div className="reg__form-group">
                                <input onChange={e => setRegInfo(old => ({...old, rePassword: e.target.value.target}))} value={regInfo.rePassword} className="reg__form-control" placeholder="Re-Enter Password"/>
                            </div>

                        </div>

                        <div className="reg__terms-container">
                            <CheckButtons active={active} setActive={setActive}/>
                            You agree to the <span style={{color: "#FF9700"}}>Terms of Use</span> &amp; <span style={{color: "#FF9700"}}>Privacy policy</span>
                        </div>

                        <div className="reg__form-btn-group">
                            <button onClick={handleSignUp} className="reg__login-btn">
                                <span className="reg__login-btn-text"> {!isLoading?<>SIGN UP</>: <>Loading...</>}</span>
                            </button>
                        </div>

                        <div className="reg__login-alternatives-container">
                            <button className="reg__btn-google">
                                <img style={{width: "25px", transform: "skewX(25deg)"}} src={googleImg} alt =""/>
                                <span className="reg__btn-google-text">Sign&nbsp;in&nbsp;with&nbsp;Google</span>
                            </button>
                            <button className="reg__btn-facebook">
                                <FaFacebookF style={{fontSize: "1.3rem", transform: "skewX(25deg)"}} />
                                <span className="reg__btn-facebook-text">
                                    Sign&nbsp;in&nbsp;with&nbsp;Facebook
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