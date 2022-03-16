


import { useState } from "react";
import Footer from "../component/footer";
import Header from "../component/header";

const Folder = () => {
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
                     File manager
                     <Folder name= />
                </main>
                <footer>
                        <Footer/>
                </footer>
       
        </div>
        )
}

export default Folder;