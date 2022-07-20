import { FaEdit, FaPlus } from "react-icons/fa"
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
                        <button className="upload__form-edit-btn">
                            <FaEdit />
                        </button>
                    </div>

                    {/* drop-image bar */}

                    <section className="upload__image-dropbox-container">
                        <input className="upload__image-dropbox"/>
                        <div>
                            <FaPlus />
                            <span className="upload__image-head">Upload Image</span>
                            <p className="upload__image-desc">or Drag and drop cover here</p>
                        </div>
                    </section>

                    {/* Image previews container */}

                    <section className="upload__image-preview">
                        <div className="upload__image-preview-inner">

                        </div>
                        
                    </section>
                </div>
            </section>

            <section className="upload__description-section">

            </section>
        </main>
    </div>

    )
}