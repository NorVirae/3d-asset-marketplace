




import Folder from "../component/folder";
import Footer from "../component/footer";
import Header from "../component/header";


const FileManager = () => {
    
    return (
        <div className="container">
                <header>
                        <Header/>
                </header>

                <main className="file-main">  
                        <Folder/>
                    
                </main>
                <footer>
                        <Footer/>
                </footer>
       
        </div>
        )
}

export default FileManager;