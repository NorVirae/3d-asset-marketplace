import Footer from "../component/footer";
import Header from "../component/header";

const Register = () => {
        
    return (
        <div className="container">
                <header>
                        <Header/>
                </header>

                <main>
                        <div className="register">
                                <form className="form">
                                        <center><h2 className="title-header">register</h2></center>
                                        <fieldset className="form-group">
                                                <input placholder={"E-mail"} className="form-control"/>
                                                <span className="placeholder">E-mail</span>

                                        </fieldset>

                                        <fieldset className="form-group">
                                                <input placholder={"Password"} className="form-control"/>
                                                <span className="placeholder">Password</span>

                                        </fieldset>

                                        <fieldset className="form-group">
                                                <input placholder={"Re-Type Password"} className="form-control"/>
                                                <span className="placeholder">Re-type Password</span>

                                        </fieldset>

                                        <fieldset className="form-group">
                                                <button className="btn">Register</button>
                                        </fieldset>
                                </form>
                        </div>
                </main>

                <footer>
                        <Footer/>
                </footer>
       
        </div>
        )
}

export default Register;