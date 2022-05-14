import { useState } from "react"
import axios from "axios"


const TestUpload = () => {
    const [file, setFile] = useState("")

    const handleUpload = async (e) => {
        try{

        
            let file = e.target.files[0]
            let chunk = file.slice(0, 1024)
        
            let headers = {'Content-Type':'application/octet-stream'}
            const data = await axios.post("http://localhost:8080/api/file/store?name=joe.png&size=1024&id=231&currentChunkIndex=4&totalChunks=123", chunk, {headers})
    }catch(err){
        console.log(err)
        if (err.response){
            console.log(err.res)
        }
    }

}
    
    return <div >
        <input onChange={e => handleUpload(e)} type="file" />
        <button> Upload</button>
    </div>
}

export default TestUpload