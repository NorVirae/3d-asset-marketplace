import {useState, useEffect} from 'react';


const Home = () => {
    const [activeDragZone, setActiveDragZone] = useState(false);
    const [files, setFiles] = useState([]);
    const [currentFileIndex, setCurrentFileIndex] = useState(null);
    const [lastUploadedFileIndex, setLastUploadedFileIndex] = useState(null);
    const handleDrop = (e) => {

        
        e.stopPropagation();
        e.preventDefault();

        setFiles([...files, ...e.dataTransfer.files])
        console.log(e.dataTransfer.files)
    }

    const handleFileUpload = (e) =>  {
        e.preventDefault()
        setFiles([...files, ...e.target.files])
        console.log(files)
    }

    useEffect(()=>{
        if (files.length > 0){
            if (currentFileIndex === null){
                setCurrentFileIndex(lastUploadedFileIndex === null?0:lastUploadedFileIndex + 1)
            }
        }
    },[files.length])
    
    return (
    <div className="container">
                <header>This is the Header</header>
                    <main onDrop={e=>handleDrop(e)} >

                        <div 
                            onDragEnter={e=>setActiveDragZone(true)}
                            onDragLeave={e=>setActiveDragZone(false)}
                            onDrop={handleDrop}
                            className={`dropzone ${activeDragZone?"active":""}`}>
                            Drag and Drop Your Files Here
                            <input className='form-file' onChange={e=>handleFileUpload(e)} type="file" />

                        </div>

                    </main>
                <footer>This is the footer</footer>
            </div>
            )
}

export default Home;