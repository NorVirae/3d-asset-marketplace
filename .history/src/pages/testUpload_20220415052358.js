import { useState } from "react"



const TestUpload = () => {
    const [file, setFile] = useState()
    return <div>
        <input onChange={e=>setFile(e.target.)} value />
    </div>
}

export default TestUpload