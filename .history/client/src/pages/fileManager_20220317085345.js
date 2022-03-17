




import Footer from "../component/footer";
import Header from "../component/header";


const FileManager = () => {
    
    return (
        <div className="container">
                <header>
                        <Header/>
                </header>

                <main>  
                     File manager <span className="fas fa-folder"></span>
                    
                </main>
                <footer>
                        <Footer/>
                </footer>
       
        </div>
        )
}

export default FileManager;