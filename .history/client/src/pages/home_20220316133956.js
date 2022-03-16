import {useState} from 'react';


const Home = () => {
    const [activeDragZone, setActiveDragZone] = useState(false);

    return (<div className="container">
                <header>This is the Header</header>
                    <main>
                        <div on onDragEnter={e=>setActiveDragZone(!activeDragZone)} onDragLeave={e=>setActiveDragZone(!activeDragZone)} className={`dropzone ${activeDragZone?"active":""}`}>
                            Drop Your Files Here
                        </div>
                    </main>
                <footer>This is the footer</footer>
            </div>)
}

export default Home;