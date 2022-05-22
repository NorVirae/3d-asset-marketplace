
import { useContext, useState } from "react";
import { RegisterContext } from "./context/registerContext";



const OpenStoreModal = () => {
    const [active, setActive] = useState(false)
    const [showRegModal, setShowRegModal] = useContext(RegisterContext)
    return(
        <div className="opn__modal-overlay">
            <div className="opn__modal">
                <h2>Opening a Store</h2>
                <div>
                    <p>We can only accept the most qualified sellers at the moment</p>
                    <p>Show us why you would be a great shop owner</p>
                </div>

                <div className="opn__form-group">
                    <label>Links to your portfolio</label>
                    <input />
                </div>

                <div className="opn__form-group">
                    <label>Links to your portfolio</label>
                    <input />
                </div>

                <p> You should receive an answer within a few hours</p>

                <div className="opn__btn-group"
            </div>
        </div>
    )
}

export default OpenStoreModal;