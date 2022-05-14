import { useState } from "react"
import axios from "axios"


const TestUpload = () => {
    const [file, setFile] = useState("")

    const handleUpload = async (e) => {
        try{

        
            let file = e.target.files[0]
            let chunk = file.slice(0, 1024)

            const params = new URLSearchParams()
            params.set("name","joe.png" )
            params.set("size","1024" )
            params.set("id","231" )
            params.set("currentChunkIndex","4" )
            params.set("totalChunks","123" )

            

            let headers = {ContentType:'application/json'}
            console.log("RAN")
            
            const data = await axios.post("http://localhost:8080/api/file/store?"+params, chunk, {headers:headers})
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