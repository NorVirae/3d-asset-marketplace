import { useState } from "react"
import axios from "axios"


const TestUpload = () => {
    const [file, setFile] = useState("")

    const handleUpload = (e) => {
        let file = e.target.files[0]
        let chunk = file.slice(0, 1024)
        console.log(file.slice(0, 1024))
        console.log(e.target.files[0])
        axios.post("http://localhost:8080/api/file/store", chunk, {"content-ype": "octet-stream"})
    }
    
    return <div >
        <input onChange={e => handleUpload(e)} type="file" value={file} />
        <button> Upload</button>
    </div>
}

export default TestUpload