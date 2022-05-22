import LoootyLogo from "../loootyLogo";



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
                    </p>

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
                    </form>
                </div>
           </section>
        </div>
        
    )
}

export default SignUpModal;