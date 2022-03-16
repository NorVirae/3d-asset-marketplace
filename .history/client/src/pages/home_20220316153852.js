import {useState} from 'react';


const Home = () => {
    const [activeDragZone, setActiveDragZone] = useState(false);
    const [files, setFiles] = useState([])
    const handleDrop = (e) => {

        
        e.stopPropagation();
        e.preventDefault();

        setFiles([...files, ...e.dataTransfer.files])
        console.log(e.dataTransfer.files)
    }

    const handleFileUpload = () =>  {
        
    }
    
    return (
    // <div className="container">
    //             <header>This is the Header</header>
    //                 <main onDrop={e=>handleDrop(e)} >

                        <div 
                            onDragEnter={e=>setActiveDragZone(true)}
                            onDragLeave={e=>setActiveDragZone(false)}
                            onDrop={handleDrop}

                            className={`dropzone ${activeDragZone?"active":""}`}>
                            Drag and Drop Your Files Here
                        </div>
            //         </main>
            //     <footer>This is the footer</footer>
            // </div>
            )
}

export default Home;