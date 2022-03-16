


const Home = () => {
    const [activeZone, setActiveZone] = useState(false);

    return (<div className="container">
                <header>This is the Header</header>
                    <main>
                        <div onDragLeave={} className="dropzone">
                            Drop Your Files Here
                        </div>
                    </main>
                <footer>This is the footer</footer>
            </div>)
}

export default Home;