import { FaEdit, FaPlus, FaTag } from "react-icons/fa"
import IdentityBtn from "../component/buttons/identityBtn"
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
                            <div className="upload__image-item">
                                <FaPlus />
                                <p>Preview Image</p>
                            </div>
                        </div>
                        
                    </section>
                </div>
            </section>

            <section className="upload__description-section">
                <IdentityBtn text={"Description"} />
                <section className="upload__text-area-container">
                    <textarea className="upload__text-area">
                    </textarea>
                    <button className="upload__text-area-btn">
                        <FaEdit/>
                    </button>
                </section>

                <section className="upload__tags-container">
                    <div className="upload__tags-title-container">
                        <div className="upload__tags-title">
                            <FaTag /> Tags
                        </div>
                        <p>Choose up to five 2/5 tags</p>
                    </div>

                    <section className="upload__tags-container">
                        <button className="upload__tag-btn">3D Assets</button>
                        <button className="upload__tag-btn">3D Assets</button>
                        <button className="upload__tag-btn">3D Assets</button>
                        <button className="upload__tag-btn">3D Assets</button>
                        <button className="upload__tag-btn">3D Assets</button>
                        <button className="upload__tag-btn">3D Assets</button>
                        <button className="upload__tag-btn">3D Assets</button>
                        <button className="upload__tag-btn">3D Assets</button>
                        <button className="upload__tag-btn">3D Assets</button>
                    </section>
                </section>

                <section className="upload__main-file-upload-container">
                    <input className="upload__main-files-upload" type={"file"}/>
                </section>

                <section>
                    Price
                    <div className="upload__form-group">
                        <section className=""
                    </div>
                </section>
            </section>
        </main>
    </div>

    )
}