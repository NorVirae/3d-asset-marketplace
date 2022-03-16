import {useState} from 'react';


const Home = () => {
    const [activeDragZone, setActiveDragZone] = useState(false);
    const handleDrop = (e) => {
        console.log(e)
    }
    return (<div className="container">
                <header>This is the Header</header>
                    <main>
                        <div onDrop={e=>handleDrop(e)} onDragEnter={e=>setActiveDragZone(true)} onDragLeave={e=>setActiveDragZone(false)} className={`dropzone ${activeDragZone?"active":""}`}>
                            Drop Your Files Here
                        </div>
                    </main>
                <footer>This is the footer</footer>
            </div>)
}

export default Home;