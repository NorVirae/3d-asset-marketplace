


const Home = () => {
    const [activeDragZone, setActiveDragZone] = useState(false);

    return (<div className="container">
                <header>This is the Header</header>
                    <main>
                        <div onDragLeave={e=>setActiveDragZone(!activeDragZone)} className={`dropzone${activeDragZone?""}`}>
                            Drop Your Files Here
                        </div>
                    </main>
                <footer>This is the footer</footer>
            </div>)
}

export default Home;