import axios from 'axios';
import {useState, useEffect} from 'react';
import Footer from '../component/footer';
import Header from '../component/header';

const chunkSize = 10 * 1024;

const Home = () => {
    const [activeDragZone, setActiveDragZone] = useState(false);
    const [files, setFiles] = useState([]);
    const [currentFileIndex, setCurrentFileIndex] = useState(null);
    const [lastUploadedFileIndex, setLastUploadedFileIndex] = useState(null);
    const [currentChunkIndex, setCurrentChunkIndex] = useState(null);

    const handleDrop = (e) => {

        e.stopPropagation();
        e.preventDefault();

        setFiles([...files, ...e.dataTransfer.files])
    }

    const handleFileInput = (e) =>  {
        e.preventDefault()
        setFiles([...files, ...e.target.files])
    }

    const uploadChunk = (readerEvent) => {
        const file = files[currentChunkIndex]
        const data = readerEvent.target.result
        const params = new URLSearchParams()
        params.set('name', file.name);
        params.set('size', file.size);
        params.set('currentChunkIndex', currentChunkIndex);
        params.set('totalChunks', Math.ceil(file.size/chunkSize))
        const headers = {
            'Content-Type':'application/octet-stream'
        }

        const url = 'http://localhost:8080/file/upload'+params.toString()
        axios.post(url, data, {headers})
    }

    const readAndUploadCurrentChunk = () => {
        const reader = new FileReader()
        const file = files[currentFileIndex];
        if(!file){
            return;
        }

        const from = currentChunkIndex * chunkSize;
        const to = from + chunkSize

        const blob = files[currentFileIndex].slice(from, to)
        
        reader.onload = (e) => uploadChunk(e)
        reader.readAsDataURL(blob)

    }




    useEffect(() => {

        
        if (files.length > 0){
            console.log(files[0].slice(0, 1024))
            if (currentFileIndex === null){
                setCurrentFileIndex(
                    lastUploadedFileIndex === null? 0: lastUploadedFileIndex + 1
                )
            }
        }
    }, [files.length])


    useEffect(() => {
        if (currentFileIndex !== null){
            setCurrentChunkIndex(0)
            
        }
    }, [currentFileIndex])

    useEffect(()=>{
        if (currentChunkIndex !== null){
            readAndUploadCurrentChunk(files)
        }
    },[currentChunkIndex])

    return (
    <div className="container">
                <header><Header/></header>
                    <main className='main'  >
                        <input className={`dropzone ${activeDragZone?"active":""}`} onDrop={e=>handleDrop(e)} onChange={e=>handleFileInput(e)} type="file" />

                        {/* <div 
                            onDragEnter={e=>setActiveDragZone(true)}
                            onDragLeave={e=>setActiveDragZone(false)}
                            // onDrop={handleDrop}
                            // className={`dropzone ${activeDragZone?"active":""}`}
                            >
                            Drag and Drop Your Files Here

                        </div> */}

                    </main>
                <footer><Footer/></footer>
            </div>
            )
}

export default Home;