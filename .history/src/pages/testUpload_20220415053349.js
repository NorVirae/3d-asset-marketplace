import { useState } from "react"
import axios from "axios"


const TestUpload = () => {
    const [file, setFile] = useState("")

    const handleUpload = (e) => {
        console.log(e.target.files[0])
        axios
    }
    
    return <div >
        <input onChange={e => handleUpload(e)} type="file" value={file} />
        <button> Upload</button>
    </div>
}

export default TestUpload