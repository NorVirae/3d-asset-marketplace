import axios from 'axios';
import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import Footer from '../component/footer';
import Header from '../component/header';

const chunkSize = 10 * 1024;

const Home = () => {
    const [activeDragZone, setActiveDragZone] = useState(false);
    const [files, setFiles] = useState([]);
    const [currentFileIndex, setCurrentFileIndex] = useState(null);
    const [lastUploadedFileIndex, setLastUploadedFileIndex] = useState(null);
    const [currentChunkIndex, setCurrentChunkIndex] = useState(null);
    const user  = useSelector(state=>state.user)
    const handleDrop = (e) => {

        e.stopPropagation();
        e.preventDefault();
        if (!e.dataTransfer.files) return

        setFiles([...files, ...e.dataTransfer.files])
    }

    const handleFileInput = (e) =>  {
        e.preventDefault()
        if (!e.target.files) return
        setFiles([...files, ...e.target.files])
    }

    const uploadChunk = async (readerEvent) => {
        try{

            const file = files[currentFileIndex]
            const data = readerEvent.target.result
            const params = new URLSearchParams()
            params.set('name', file.name);
            params.set('size', file.size);
            params.set('currentChunkIndex', currentChunkIndex);
            params.set('totalChunks', Math.ceil(file.size/chunkSize))
            params.set

            const headers = {
                'Content-Type':'application/octet-stream'
            }

            const url = 'http://localhost:8080/file/upload/file?'+params.toString()
            console.log(params.toString())

            const res = await axios.post(url, data, {headers})
            console.log(res, "Wij")
            setCurrentChunkIndex(currentChunkIndex + 1)
            if (currentChunkIndex === Math.ceil(file.size/chunkSize) - 1){
                console.log("DISD")
                file.finalfilename = res.data.finalFileName
                setLastUploadedFileIndex(currentFileIndex)
                setCurrentChunkIndex(null)
            }

        }catch(err){
            console.log(err)
        }
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
            // console.log(files[0].slice(0, 1024))
            if (currentFileIndex === null){
                setCurrentFileIndex(
                    lastUploadedFileIndex === null? 0: lastUploadedFileIndex + 1
                )
            }
        }
    }, [files.length])


    useEffect(()=>{

        if (lastUploadedFileIndex ===null)return
        const isLastFile = lastUploadedFileIndex === files.length - 1
        const nextFileIndex = isLastFile? null : currentFileIndex + 1
        
        setCurrentFileIndex(nextFileIndex)
        
    }, [lastUploadedFileIndex])

    useEffect(() => {
        if (currentFileIndex !== null){

            setCurrentChunkIndex(0)
            
        }
    }, [currentFileIndex])

    useEffect(()=>{
        if (currentChunkIndex !== null){

            readAndUploadCurrentChunk()
        }
    },[currentChunkIndex])

    return (
    <div className="container">
                <header><Header/></header>
                    <main className='main'  >
                        <input multiple className={`dropzone ${activeDragZone?"active":""}`} onDrop={e=>handleDrop(e)} onChange={e=>handleFileInput(e)} type="file" />
                    

                        {
                            files.map((indFile, index) => {
                                let progress = 0

                                if(currentChunkIndex >= (indFile.size / chunkSize) - 1){
                                    progress = 100
                                }

                                else {
                                    progress = currentChunkIndex / (indFile.size / chunkSize) * 100
                                }
                                return <div key={index} className='progress'>
                                            <div style={{width:`${progress}%`}} className='progress-move'>
                                                {Math.floor(progress)}%
                                            </div>
                                            <span className='prog-filename'>{indFile.name} ---  {indFile.finalfilename}</span>
                                            
                                    </div>
                            })
                        }

                  

                        
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