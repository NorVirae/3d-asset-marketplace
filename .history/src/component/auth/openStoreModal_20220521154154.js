
import { useContext, useState } from "react";
import { RegisterContext } from "./context/registerContext";



const SignUpModal = () => {
    const [active, setActive] = useState(false)
    const [showRegModal, setShowRegModal] = useContext(RegisterContext)
    return(
        <div className="opn__modal-overlay">
            <div className="opn__modal">
                <h2>open a store</h2>
            </div>
        </div>
    )
}

export default SignUpModal;