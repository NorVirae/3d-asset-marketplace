import LoootyLogo from "../loootyLogo";



const SignUpModal = () => {
    return(

        <div className="reg__sign-up-overlay">
            <section className="reg__sign-up-modal">
                <div className="reg__loooty-innitials-container">
                    <LoootyLogo />
                    <p className="reg__loooty-about">
                        Welcome to Loooty.
                        the best is about to get better!
                    </p>

                    <ul className="reg__loooty">

                    </ul>
                </div>

                <div className="reg__sign-up-forms-container">
                    <form className="reg__sign-up-form">

                    </form>
                </div>
           </section>
        </div>
        
    )
}

export default SignUpModal;