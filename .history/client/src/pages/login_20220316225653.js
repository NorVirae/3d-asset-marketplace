import { useState } from "react";
import Footer from "../component/footer";
import Header from "../component/header";

const Register = () => {
    const [values, setValues] = useState
    return (
        <div className="container">
                <header>
                        <Header/>
                </header>

                <main>  
                        
                        <div className="register">
                                <form>
                                <center><h2 className="title-header">Login</h2></center>

                                        <fieldset className="form-group">
                                                <input  onChange={e=>setValues({...values, email:e.target.value})} value={values.email} placholder={"E-mail"} className="form-control"/>
                                                <span className="placeholder">Email</span>
                                        </fieldset>

                                        <fieldset className="form-group">
                                                <input  onChange={e=>setValues({...values, email:e.target.value})} value={values.email} placholder={"Password"} className="form-control"/>
                                                <span className="placeholder">Password</span>

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