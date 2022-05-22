
import { useContext, useState } from "react";
import { RegisterContext } from "./context/registerContext";



const SignUpModal = () => {
    const [active, setActive] = useState(false)
    const [showRegModal, setShowRegModal] = useContext(Regist;erContext)
    return(
        <div className="">
            open a store
        </div>
    )
}

export default SignUpModal;