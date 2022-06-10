import CGBar from "../component/card/cbBar"
import Navbar from "../component/navbar/navbar"


const User = () => {

    return (
        <section>
            <header>
            <NavBar shortSearch={true} style={{paddingBottom: "0"}} search={true}/>
            <CGBar slim={true}/>
            </header>

            <main>

            </main>
        </section>
    )
}

export default User