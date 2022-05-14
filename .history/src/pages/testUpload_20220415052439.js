import { useState } from "react"



const TestUpload = () => {
    const [file, setFile] = useState()
    return <div>
        <input onChange={console.log(e)} type="file" value />
    </div>
}

export default TestUpload