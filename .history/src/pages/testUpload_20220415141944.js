import { useState } from "react"
import axios from "axios"


const TestUpload = () => {
    const [file, setFile] = useState("")
    const [chunkie, setChunkie] = useState(null)

    const handleUpload = async (e) => {
        try{

        
            let file = e.target.files[0]

            const totalChunk = file.size / 1024

            console.log(totalChunk, "Oya o")
            const fileName = file.name
            console.log(fileName, "YEAH YOU")

            const params = new URLSearchParams()
            params.set("name",file )
            params.set("size","1024" )
            params.set("id","231" )
            params.set("currentChunkIndex","4" )
            params.set("totalChunks",totalChunk )

            const reader = new FileReader()

            let chunk = file.slice(0, 1024)



            reader.readAsDataURL(chunk);

            let headers = {ContentType:'application/octet-stream'}
            
            
            reader.onload = async(e) => {
                const data = await axios.post("http://localhost:8080/api/file/store?" + params, {chunk:e.target.result}, {headers})
               
            }

            
    }catch(err){
        console.log(err)
        if (err.response){
            console.log(err.response.data)
        }

        console.log(err.message)
    }

}
    
    return <div >
        <input onChange={e => handleUpload(e)} type="file" />
        <button> Upload</button>
    </div>
}

export default TestUpload