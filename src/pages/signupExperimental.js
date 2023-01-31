import { useContext, useEffect } from "react";
import { RegisterContext } from "../component/auth/context/registerContext";
import NavBar from "../component/navbar/navbar"


const SignUpExperimental = () => {
  const [showRegModal, setShowRegModal] = useContext(RegisterContext);
  
  useEffect(() => {
    setShowRegModal(old => ({...old, register: true}))
  },[])
    return (
        <div>
            <NavBar />
        </div>
    )
}

export default SignUpExperimental