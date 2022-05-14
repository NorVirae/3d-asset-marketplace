import { useState } from "react"



const TestUpload = () => {
    const [file, setFile] = useState()
    return <div className="">
        <input onChange={e => console.log(e)} type="file" value={file} />
        <button> Upload</button>
    </div>
}

export default TestUpload