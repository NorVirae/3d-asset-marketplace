import { useContext } from "react"
import { RegisterContext } from "../auth/context/registerContext"




const StartSelling = () => {
    const [showRegModal, setShowRegModal] = useContext(RegisterContext)
    return (
        <div className="landing__start-selling-container">
            <h1 className="landing__start-selling-text">
                Start Selling on Loooty
            </h1>

            <h3 className="landing__start-selling-desc">
                Share your art resources with the world and keep as much as 95% of revenues
            </h3>

            <button onClick={e=>setShowRegModal({...showRegModal, openStore:!showRegModal.openStore})}
                className="landing__slogan-browse">
                <span className="landing__slogan-browse-text">OPEN A STORE</span>
            </button>
        </div>
        
    )
}

export default StartSelling