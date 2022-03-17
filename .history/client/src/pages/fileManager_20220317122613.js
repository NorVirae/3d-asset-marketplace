
import {useState} from 'react';
import Folder from "../component/folder";
import Footer from "../component/footer";
import Header from "../component/header";
import File from "../component/files";


const FileManager = () => {
        const [emailToCopy, setEmailToCopy] = useState('');
        const [fileToCopy, setFileToCopy] = useState('');

        const sendFile = () => {
                console.log("send file!");
        }
        const copyEmail = (e) => {
                console.log("file copied!");
                setEmailToCopy(e)
                alert("copying "+e+" Okay to continue! ")
        }

        const copyFile = (e) => {
                console.log("file copied!");
                alert("copying "+e+" Okay to continue! ")
                setFileToCopy(e)
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

                                        <File onClick={e=>copyFile("image.jpg")}/>
                                </div>

                                <div className="file-inner-bottom">
                                       <center> <h1>Send File</h1></center>

                                        <span style={{display:"flex", justifyContent:"center" fontSize:"1.5rem", fontWeight:"1000"}}><input onChange={e=>setEmailToCopy(e.target.value)} value={emailToCopy} placeholder="click on email of user you want to send file to" style={{margin:".3rem .4rem"}} className="form-control" />E-mail of Recipient</span>
                                        <span style={{display:"flex", fontSize:"1.5rem", fontWeight:"1000"}}><input onChange={e=>setFileToCopy(e.target.value)} value={fileToCopy} placeholder="click on file to send from above" style={{margin:".3rem .4rem"}} className="form-control" />filename to send </span>
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