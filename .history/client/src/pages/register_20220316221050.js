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
                                        <fieldset className="form-group">
                                                <input className placholder={"E-mail"} className=""/>
                                        </fieldset>

                                        <fieldset className="form-group">
                                                <input placholder={"Password"} className=""/>
                                        </fieldset>

                                        <fieldset className="form-group">
                                                <input placholder={"Re-Type Password"} className=""/>
                                        </fieldset>

                                        <fieldset className="form-group">
                                                <button className="btn">Submit</button>
                                        </fieldset>
                                </form>
                        </div>
                </main>

                <footer>
                        <Footer/>
                </footer>
       
        </div>)
}

export default Register;