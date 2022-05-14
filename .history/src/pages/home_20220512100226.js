import { Link } from "react-router-dom"


const Home = () => {
    return (
        <div>
            <header>
                <nav className="landing__navbar">
                    <Link className="landing__navbar-brand" to = "/">Loooty</Link>

                    <ul className="landing__navbar-inner-container">
                        <li className={"landing__nav-item"}>
                            <Link to={"landing__nav-link"}>Open a Store</Link>
                        </li>

                        <li className={"landing__nav-item"}>
                            <Link to={"landing__nav-link"}>Help</Link>
                        </li>

                        <li className={"landing__nav-item"}>
                            <Link to={"landing__nav-link"}>Sign In</Link>
                        </li>

                        <li className={"landing__nav-item"}>
                            <Link to={""}>Sign Up</Link>
                        </li>

                    </ul>

                </nav>

                <div className="slogan">

                </div>

            </header>

            <main>

            </main>

            <footer>

            </footer>
        </div>
        )
}

export default Home
