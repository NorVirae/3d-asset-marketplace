import CGBar from "../component/card/cbBar"
import NavBar from "../component/navbar/navbar"


const User = () => {

    return (
        <section>
            <header>
                <NavBar loggedIn={true} shortSearch={true} style={{paddingBottom: "0"}} search={true}/>
                <div style={{backgroundColor: "#15151C", display: "flex", alignItems: "center", height: "5vh", padding: "0px"}}>
                    <CGBar style={{margin: "1rem auto"}} slim={true}/>
                </div>
            </header>

            <main>
                <section className="user__profile-preview-container">
                    <div className="user__profile-container">
                        <img src="user__profile-img" className="user__profile-img"/>


                    </div>
                </section>
            </main>
        </section>
    )
}

export default User