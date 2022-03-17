




import Folder from "../component/folder";
import Footer from "../component/footer";
import Header from "../component/header";
import File from "../component/files";


const FileManager = () => {
        const sendFile = () => {
                console.log("send file!");
        }
        const copyEmail = () => {
                console.log("file copied!");
                alert
        }

    return (
        <div className="container">
                <header>
                        <Header/>
                </header>

                <main className="file-main"> 
                        <div className="file-left">
                                <div className="storage">Storage: 4GB</div>
                                <div className="remaining">Remaining: 3.4GB</div>

                                <div className="remaining">
                                        <ul style={{listStyle:"none"}}>
                                                <li onClick={e=>copyEmail("norbertmbafrank@gmail.com")}>norbertmbafrank@gmail.com</li>
                                                <li onClick={e=>copyEmail("petermbafrank@gmail.com")}>petermbafrank@gmail.com</li>
                                                <li onClick={e=>copyEmail("fischela@gmail.com")}>fischela@gmail.com</li>
                                        </ul>
                                </div>
                                

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
                                       <center> <h1>Send File</h1></center>
                                        <input placeholder="click on email of user you want to send file to" style={{margin:".3rem .4rem"}} className="form-control" />
                                        <input placeholder="click on file to send from above" style={{margin:".3rem .4rem"}} className="form-control" />
                                        <button onClick={e=>sendFile()} className={"btn"}>Send</button>

                                       
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