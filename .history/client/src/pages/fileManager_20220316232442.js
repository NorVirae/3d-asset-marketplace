




import { useState } from "react";
import Footer from "../component/footer";
import Header from "../component/header";

const fileManager = () => {
    const [values, setValues] = useState({
        email:null,
        password:null
    })

    
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