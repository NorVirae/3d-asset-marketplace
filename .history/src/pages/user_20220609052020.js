import CGBar from "../component/card/cbBar"
import NavBar from "../component/navbar/navbar"


const User = () => {

    return (
        <section>
            <header>
                <NavBar shortSearch={tru} style={{paddingBottom: "0"}} search={true}/>
                <div style={{backgroundColor: "#15151C", display: "flex", alignItems: "center", height: "5vh", padding: "0px"}}>
                    <CGBar style={{margin: "1rem auto"}} slim={true}/>
                </div>
            </header>

            <main>

            </main>
        </section>
    )
}

export default User