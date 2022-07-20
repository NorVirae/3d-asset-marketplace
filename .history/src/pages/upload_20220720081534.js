import { FaEdit, FaMinus, FaPlus, FaPlusCircle, FaTag } from "react-icons/fa"
import { GrEdit } from "react-icons/gr"
import { MdEdit } from "react-icons/md"
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
                            <MdEdit />
                        </button>
                    </div>

                    {/* drop-image bar */}

                    <section className="upload__image-dropbox-container">
                        <div className="upload__image-dropbox-twin">
                            <input placeholder="none" type={"file"} className="upload__image-dropbox"/>

                            <FaPlusCircle style={{color: "#737377", fontSize: "1.5rem"}}/>
                            <span className="upload__image-head">Upload Image</span>
                            <p className="upload__image-desc">or Drag and drop cover here</p>
                        </div>
                    </section>

                    {/* Image previews container */}

                    <section className="upload__image-preview">
                        <div className="upload__image-preview-inner">
                            <div className="upload__image-item">
                                <FaPlusCircle />
                                <p>Preview Image</p>
                            </div>
                        </div>

                            <div className="upload__image-item">
                                <FaPlusCircle />
                                <p>Preview Image</p>
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

                <section className="upload__price-section">
                    <div className="upload__price-inner-section">
                        <h3>Price</h3>
                        <div className="upload__form-group">
                            <span> Basic License</span>
                            <section className="upload__skew-container">
                                <input className="upload__price-input" />
                                <div className="upload__container-controller">
                                    <button className="upload__controller-btn"><FaPlus/></button>
                                    <button className="upload__controller-btn"><FaMinus/></button>
                                </div>
                            </section>
                        </div>

                        <div className="upload__form-group">
                            <span> Commercial License</span>
                            <section className="upload__skew-container">
                                <input className="upload__price-input" />
                                <div className="upload__container-controller">
                                    <button className="upload__controller-btn"><FaPlus/></button>
                                    <button className="upload__controller-btn"><FaMinus/></button>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="upload__more-text">
                        More about license
                    </div>
                </section>

                <section className="upload__publish-section">
                    <button className="upload__draft-btn">
                        <span>Draft</span>
                    </button>

                    <button className="upload__draft-btn">
                        <span>Publish</span>
                    </button>
                </section>
            </section>
        </main>
    </div>

    )
}

export default UploadPage;