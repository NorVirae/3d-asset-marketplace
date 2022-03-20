import {useState, useEffect} from 'react';
import Footer from '../component/footer';
import Header from '../component/header';


const Home = () => {
    const [activeDragZone, setActiveDragZone] = useState(false);
    const [files, setFiles] = useState([]);
    // const [currentFileIndex, setCurrentFileIndex] = useState(null);
    // const [lastUploadedFileIndex, setLastUploadedFileIndex] = useState(null);
    const handleDrop = (e) => {

        e.stopPropagation();
        e.preventDefault();

        setFiles([...files, ...e.dataTransfer.files])
        console.log(e.dataTransfer.files)
    }

    const handleFileInput = (e) =>  {
        e.preventDefault()
        setFiles([...files, ...e.target.files])
        console.log(files)
    }

    useEffect(() => {

    }, []}

    return (
    <div className="container">
                <header><Header/></header>
                    <main className='main' onDrop={e=>handleDrop(e)} >
                        <div 
                            onDragEnter={e=>setActiveDragZone(true)}
                            onDragLeave={e=>setActiveDragZone(false)}
                            onDrop={handleDrop}
                            className={`dropzone ${activeDragZone?"active":""}`}>
                            Drag and Drop Your Files Here
                            <input className='form-file' onChange={e=>handleFileInput(e)} type="file" />

                        </div>

                    </main>
                <footer><Footer/></footer>
            </div>
            )
}

export default Home;