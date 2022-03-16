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
                                        <fieldset className="form-group">
                                                <input placholder={"E-mail"} className="form-control"/>
                                        </fieldset>

                                        <fieldset className="form-group">
                                                <input placholder={"Password"} className="form-control"/>
                                        </fieldset>

                                        <fieldset className="form-group">
                                                <button className="btn">Login!</button>
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