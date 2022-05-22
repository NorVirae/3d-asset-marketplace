
import { useContext, useState } from "react";
import { RegisterContext } from "./context/registerContext";



const SignUpModal = () => {
    const [active, setActive] = useState(false)
    const [showRegModal, setShowRegModal] = useContext(RegisterContext)
    return(
        <div className="opn__modal-overlay">
            <div className="opn__modal">
                <h2>Opening a Store</h2>
                <p>We can only accept the most qualified sellers at the moment</p>
                <p>Show us why you would be a great sh</p>

            </div>
        </div>
    )
}

export default SignUpModal;