
import {useState} from 'react';
import Folder from "../component/folder";
import Footer from "../component/footer";
import Header from "../component/header";
import File from "../component/files";
import { useSelector } from 'react-redux';


const FileManager = () => {
        const [emailToCopy, setEmailToCopy] = useState('');
        const [fileToCopy, setFileToCopy] = useState('');
        const user = useSelector(state=>state.user)
        const sendFile = () => {
                console.log("send file!");
        }
        const copyEmail = (e) => {
                console.log("file copied!");
                setEmailToCopy(e)
                // alert("copying "+e+" OK to continue! ")
        }

        const copyFile = (e) => {
                console.log("file copied!");
                // alert("copying "+e+" OK to continue! ")
                setFileToCopy(e)
        }

        const buySpace = () => {
                alert("1 GB of space purchased!")
        }


        const convertToMB = (size) => {
                return Math.ceil(size / 1024)
        }

return (
        <div className="container">
                <header>
                        <Header/>
                </header>

                <main className="file-main"> 
                        <div className="file-left">
                                <div className="storage">Storage: {user?convertToMB(user.storage):"--"}MB</div>
                                <div className="remaining">Remaining: {user?convertToMB(user.storage):"--"}MB 3.4GB totalAccumulatedStorage</div>

                                <div className="remaining">
                                        <ul style={{listStyle:"none"}}>
                                                <li onClick={e=>copyEmail("norbertmbafrank@gmail.com")}>norbertmbafrank@gmail.com</li>
                                                <li onClick={e=>copyEmail("petermbafrank@gmail.com")}>petermbafrank@gmail.com</li>
                                                <li onClick={e=>copyEmail("fischela@gmail.com")}>fischela@gmail.com</li>
                                        </ul>
                                </div>

                                <button onClick={e=>buySpace()} className="buy-space-btn">
                                       Buy Space!
                                </button>

                        </div>

                        <div className="file-right">
                                <div className="file-inner-top">
                                        <Folder/>

                                        <Folder/>

                                        <Folder/>

                                        <Folder/>

                                        <File name={"image.jpg"} onClick={e=>copyFile("image.jpg")}/>

                                        <File name={"cloud.jpg"} onClick={e=>copyFile("cloud.jpg")}/>

                                </div>

                                <div className="file-inner-bottom">
                                       <center> <h1>Send File</h1></center>

                                        <span style={{display:"flex", alignItems:"center", fontSize:"1.5rem", fontWeight:"1000"}}><input onChange={e=>setEmailToCopy(e.target.value)} value={emailToCopy} placeholder="click on email of user you want to send file to" style={{margin:".3rem .4rem"}} className="form-control" />E-mail of Recipient</span>
                                        <span style={{display:"flex", alignItems:"center", fontSize:"1.5rem", fontWeight:"1000"}}><input onChange={e=>setFileToCopy(e.target.value)} value={fileToCopy} placeholder="click on file to send from above" style={{margin:".3rem .4rem"}} className="form-control" />Filename to send </span>

                                        <button style={{marginRight:".5rem"}} onClick={e=>sendFile()} className={"btn"}>Send</button>

                                       
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