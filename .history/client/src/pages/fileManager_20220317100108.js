




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
                        <div className="file-left">
                                <div className="storage">Storage: 4GB</div>
                                <div className="remaining">Remaining: 4GB</div>

                        </div>

                        <div className="file-right">
                                <div className="file-inner-top">
                                <Folder/>

                                <Folder/>

                                <Folder/>

                                <Folder/>

                                <File/>
                                </div>

                                <div className="file-inner-bottom">
                                        
                                </div>
                                
                        </div>
                        
                    
                </main>
                <footer>
                        <Footer/>
                </footer>
       
        </div>
        )
}

export default FileManager;