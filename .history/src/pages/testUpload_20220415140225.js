import { useState } from "react"
import axios from "axios"


const TestUpload = () => {
    const [file, setFile] = useState("")
    const [chunkie, setChunkie] = useState(null)

    const handleUpload = async (e) => {
        try{

        
            let file = e.target.files[0]

            const params = new URLSearchParams()
            params.set("name","joe.png" )
            params.set("size","1024" )
            params.set("id","231" )
            params.set("currentChunkIndex","4" )
            params.set("totalChunks","123" )

            const reader = new FileReader()

            let chunk = file.slice(0, 1024)

            reader.readAsDataURL(chunk);

            reader.onload = (e) => {
                setChunkie(e.target.result)
                // console.log(e.target.result)
            }

            let headers = {ContentType:'application/octet-stream'}
            // console.log("RAN")
            
            const data = await axios.post("http://localhost:8080/api/file/store?" + params, chunkie, {headers})
            console.log(data, "HERE CHECK THIS")
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