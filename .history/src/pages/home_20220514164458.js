import { Link } from "react-router-dom"


const Home = () => {
    return (
        <div>
            <header className="landing__header">
                <nav className="landing__navbar">
                    <Link className="landing__navbar-brand" to = "/">Loooty</Link>

                    <ul className="landing__navbar-inner-container">
                        <li className={"landing__nav-item"}>
                            <Link className="landing__nav-link" to={"landing__nav-link"}>Open a Store</Link>
                        </li>

                        <li className={"landing__nav-item"}>
                            <Link className="landing__nav-link" to={"landing__nav-link"}>Help</Link>
                        </li>

                        <li className={"landing__nav-item"}>
                            <Link className="landing__nav-link" to={"landing__nav-link"}>Sign In</Link>
                        </li>

                        <li className={"landing__nav-item"}>
                            <Link className="landing__nav-link" to={"landing__nav-link"}>Sign Up</Link>
                        </li>
                    </ul>

                </nav>

                <div className="landing__slogan">
                    <div className ="landing__slogan-first-text">
                        Welcome to the first marketplace for all things CG
                    </div>

                    <div className="landing__slogan-second-text">
                        Shop for curated Tools and more
                    </div>

                    <div className="landing__instruct-btn-container">
                        <button
                            className="landing__slogan-browse">
                            BROWSE
                        </button>

                        <button
                            className="landing__slogan-sell"
                        >SELL</button>
                    </div>
                </div>

            </header>

            <main className="landing__main">
                <section className="landing__search-section">
                    <div className="landing__search-group-container">
                        <input placeholder="Search for products artist or stores" className="landing__search-stuff" />
                    </div>

                    <div className="landing__weekly-freebies-container">
                        <span>WEEKLY FREEBIES</span>
                    </div>
                </section>

            </main>

            <footer className="landing__footer">

            </footer>
        </div>
        )
}

export default Home
