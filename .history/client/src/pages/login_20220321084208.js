import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "../component/footer";
import Header from "../component/header";

const Register = () => {
    const [values, setValues] = useState({
        email:"",
        password:""
    })

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
                try{
                        console.log("SUBMUIT")
                        const url = "http://localhost:8080/auth/login"
                        let result = await axios.post(url, {...values},  )
                        dispatch({type:"LOGGED_IN", payload:result.data.data})
                        console.log(result)
                        alert(result.data.message)
                        navigate("/file/manager")

                        
                }catch(err){
                        console.log("HEY")
                        if(err.response){
                                console.log(err.response.data.data)
                                alert(err.response.data.data)
                                
                        }
                }
    }
    return (
        <div className="container">
                <header>
                        <Header/>
                </header>

                <main className="main">  
                        
                        <div className="register">
                                <form onSubmit={handleSubmit}>
                                <center><h2 className="title-header">Login</h2></center>

                                        <fieldset className="form-group">
                                                <input  onChange={e=>setValues({...values, email:e.target.value})} value={values.email} placholder={"E-mail"} className="form-control"/>
                                                <span className="placeholder">Email</span>
                                        </fieldset>

                                        <fieldset className="form-group">
                                                <input  onChange={e=>setValues({...values, password:e.target.value})} value={values.password} placholder={"Password"} className="form-control"/>
                                                <span className="placeholder">Password</span>

                                        </fieldset>

                                        <fieldset className="form-group">
                                                <button onClick={handleSubmit} className="btn">Login!</button>
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