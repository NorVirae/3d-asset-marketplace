import CGBar from "../component/card/cbBar"
import NavBar from "../component/navbar/navbar"


const UploadPage = () => {
    return (
    <div className="upload__container">

        <header>
            <NavBar />
            <CGBar />
        </header>

        <main className="upload__mock-up">
            <section className="upload__title-section">
                <div className="upload__title-container">
                    <div className="upload__title">
                        Title: 
                    </div>
                </div>

                <div className="upload__main-content">
                    <div className="upload__form-group">
                        <input className="upload__form-control" />
                        <button><</button>
                    </div>
                </div>
            </section>

            <section className="upload__description-section">

            </section>
        </main>
    </div>

    )
}