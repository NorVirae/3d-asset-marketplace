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
                                <form>
                                <center><h2>Login</h2></center>
                                        <fieldset className="form-group">
                                                <input placholder={"E-mail"} className="form-control"/>
                                        </fieldset>

                                        <fieldset className="form-group">
                                                <input placholder={"Password"} className="form-control"/>
                                        </fieldset>

                                        <fieldset className="form-group">
                                                <input placholder={"Re-Type Password"} className="form-control"/>
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