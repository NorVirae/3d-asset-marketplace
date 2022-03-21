import axios from "axios";
import { useState } from "react";
import Footer from "../component/footer";
import Header from "../component/header";

const Register = () => {
        const [values, setValues] = useState({
                email:"",
                password:"",
                rePassword:""
        })

        const handleSubmit = async (e) => {
                e.preventDefault()
                try{
                        console.log("SUBMUIT")
                        const url = "http://localhost:8080/auth/login"
                        let result = await axios.post(url, {...values} )
                        console.log(result)

                        
                }catch(err){
                        console.log(err)
                }
        }
    return (
        <div className="container">
                <header>
                        <Header/>
                </header>

                <main className="main">
                        <div className="register">
                                <form onSubmit={handleSubmit} className="form">
                                        <center><h2 className="title-header">register</h2></center>
                                        <fieldset className="form-group">
                                                <input onChange={e=>setValues({...values, email:e.target.value})} value={values.email} placholder={"E-mail"} className="form-control"/>
                                                <span className="placeholder">E-mail</span>

                                        </fieldset>

                                        <fieldset className="form-group">
                                                <input onChange={e=>setValues({...values, password:e.target.value})} value={values.password} placholder={"Password"} className="form-control"/>
                                                <span className="placeholder">Password</span>

                                        </fieldset>

                                        <fieldset className="form-group">
                                                <input onChange={e=>setValues({...values, rePassword:e.target.value})} value={values.rePassword} placholder={"Re-Type Password"} className="form-control"/>
                                                <span className="placeholder">Re-type Password</span>

                                        </fieldset>

                                        <fieldset className="form-group">
                                                <button onClick={handleSubmit} className="btn">Register</button>
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