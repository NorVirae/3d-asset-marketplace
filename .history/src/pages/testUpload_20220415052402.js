import { useState } from "react"



const TestUpload = () => {
    const [file, setFile] = useState()
    return <div>
        <input onChange={e=>setFile(e.file)} value />
    </div>
}

export default TestUpload