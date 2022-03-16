import Footer from "../component/footer";
import Header from "../component/header";

const Register = () => {

    return (<div className="container">
                <header>
                        <Header/>
                </header>

                <main>
                        <div className="register">
                                <form>
                                        <fieldset className="form-group"
                                        <input placholder={"E-mail"} className=""/>
                                </form>
                        </div>
                </main>

                <footer>
                        <Footer/>
                </footer>
       
        </div>)
}

export default Register;