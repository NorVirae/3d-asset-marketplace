




import { useState } from "react";
import Footer from "../component/footer";
import Header from "../component/header";

const Register = () => {
    const [values, setValues] = useState({
        email:null,
        password:null
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit clicked")
    }
    return (
        <div className="container">
                <header>
                        <Header/>
                </header>

                <main>  
                        
                        
                </main>

                <footer>
                        <Footer/>
                </footer>
       
        </div>
        )
}

export default Register;