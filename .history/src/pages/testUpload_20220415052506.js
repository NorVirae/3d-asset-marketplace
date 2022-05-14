import { useState } from "react"



const TestUpload = () => {
    const [file, setFile] = useState()
    return <div>
        <input onChange={e => console.log(e)} type="file" value />
        
    </div>
}

export default TestUpload