
import { useContext, useState } from "react";
import { RegisterContext } from "./context/registerContext";



const OpenStoreModal = () => {
    const [active, setActive] = useState(false)
    const [showRegModal, setShowRegModal] = useContext(RegisterContext)
    return(
        <div className="opn__modal-overlay">
            <div className="opn__modal">
                <h2 className="0pn__modal-title">Opening a Store</h2>
                <div className="opn__modal-info">
                    <p>We can only accept the most qualified sellers at the moment</p>
                    <p>Show us why you would be a great shop owner</p>
                </div>

                <div className="opn__form-group">
                    <label className="opn__form-label">Links to your portfolio</label>
                    <input className="opn__form-control"/>
                </div>

                <div className="opn__form-group">
                    <label className="opn__form-label">Links to your portfolio</label>
                    <input className="opn__form-control"/>
                </div>

                <p className="opn__response-info"> You should receive an answer within a few hours</p>

                <div className="opn__btn-group">
                    <button >
                        <span>SUBMIT</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OpenStoreModal;