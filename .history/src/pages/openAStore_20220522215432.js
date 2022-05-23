import NavBar from "../component/navbar/navbar"




const OpenAStore = () => {
    return(
        <div className="opstore__app-container">
             { showRegModal.register && <SignUpModal /> }
             { showRegModal.openStore && <OpenStoreModal/>}
            <header>
                <NavBar />
            </header>

            <main>
                hello
            </main>

            <footer>

            </footer>
        </div>
    )
}

export default OpenAStore