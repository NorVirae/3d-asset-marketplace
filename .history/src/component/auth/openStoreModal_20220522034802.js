
import { useContext, useState } from "react";
import { RegisterContext } from "./context/registerContext";



const OpenStoreModal = () => {
    const [active, setActive] = useState(false)
    const [showRegModal, setShowRegModal] = useContext(RegisterContext)

    const handleKey = (e) => {
        console.log(e)
        if (e.key === "esc"){
            setShowRegModal({...showRegModal, openStore: false})
        }
        
    }
    return(
        <div onKeyUp={e=>{handleKey(e)}} className="opn__open-store-modal-overlay">
            <div className="opn__open-store-modal">
                <div className="opn__close-btn-container">
                    <div onClick={e=>setShowRegModal({...showRegModal, openStore: false})} className="opn__close-btn">
                        <span className="opn__close-btn-text">X</span>
                    </div>
                </div>
                <h2 className="opn__open-store-modal-title">Opening a Store</h2>
                <div className="opn__open-store-modal-info">
                    <p>We can only accept the most qualified sellers at the moment</p>
                    <p>Show us why you would be a great shop owner</p>
                </div>

                <div className="opn__open-store-form-group">
                    <label className="opn__open-store-form-label"><span style={{transform: ""}}>Links to your portfolio</span></label>
                    <input className="opn__open-store-form-control"/>
                </div>

                <div className="opn__open-store-form-group">
                    <label className="opn__open-store-form-label"><span style={{transform: ""}}>What do you want to sell on loooty?</span></label>
                    <input className="opn__open-store-form-control"/>
                </div>

                <p className="opn__open-store-response-info"> You should receive an answer within a few hours</p>

                <div className="opn__open-store-btn-group">
                    <button className="opn__open-store-btn">
                        <span className="opn__open-store-btn-text">SUBMIT</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OpenStoreModal;