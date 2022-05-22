
import { useContext, useState } from "react";
import { RegisterContext } from "./context/registerContext";



const SignUpModal = () => {
    const [active, setActive] = useState(false)
    const [showRegModal, setShowRegModal] = useContext(RegisterContext)
    return(
        <div className="opn">
            open a store
        </div>
    )
}

export default SignUpModal;