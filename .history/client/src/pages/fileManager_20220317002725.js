




import { useState } from "react";
import Footer from "../component/footer";
import Header from "../component/header";
import Folder from "./folder";

const FileManager = () => {
    const [values, setValues] = useState({
        email:"n"ull,
        password:null
    })

    
    return (
        <div className="container">
                <header>
                        <Header/>
                </header>

                <main>  
                     File manager 
                </main>
                <footer>
                        <Footer/>
                </footer>
       
        </div>
        )
}

export default FileManager;