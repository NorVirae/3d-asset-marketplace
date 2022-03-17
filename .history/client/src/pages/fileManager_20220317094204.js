




import Folder from "../component/folder";
import Footer from "../component/footer";
import Header from "../component/header";
import File from "../component/files";


const FileManager = () => {
    
    return (
        <div className="container">
                <header>
                        <Header/>
                </header>

                <main className="file-main"> 

                        <div>
                                
                        </div>
                        <Folder/>

                        <Folder/>

                        <Folder/>

                        <Folder/>

                        <File/>
                    
                </main>
                <footer>
                        <Footer/>
                </footer>
       
        </div>
        )
}

export default FileManager;