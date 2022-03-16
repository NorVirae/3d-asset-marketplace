


const Home = () => {
    const [activeDragZone, setActiveDragZone] = useStat(false);

    return (<div className="container">
                <header>This is the Header</header>
                    <main>
                        <div onDragLeave={e=>setActiveDragZone(!activeDragZone)} className={`dropzone ${activeDragZone?"active":""}`}>
                            Drop Your Files Here
                        </div>
                    </main>
                <footer>This is the footer</footer>
            </div>)
}

export default Home;