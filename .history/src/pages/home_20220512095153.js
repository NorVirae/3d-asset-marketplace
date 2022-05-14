import { Link } from "react-router-dom"


const Home = () => {
    return (
        <div>
            <header>
                <nav>
                    <Link className="landing__brand" to = "/">Loooty</Link>

                    <ul className="landin">
                        <li>Open a Store</li>

                        <li>Help</li>

                        <li>Sign In</li>

                        <li>Sign Up</li>

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
