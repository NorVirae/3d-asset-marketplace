import manImg from "../../assets/image/man.jpg"
import deadManImg from "../../assets/image/deadman.jpg"
import { useState } from "react"



const PartnerStore = () => {

    const [partnerOpen, setPartnerOpen] = useState(false)

    return (<section className="landing__open-partner-container">
                <div className="landing__open-partner-inner-container">

                   <div onMouseEnter={e=>setPartnerOpen(false)} className="landing__open-img-container">
                        <img src={deadManImg} alt="" className="landing__open-img" />
                        {partnerOpen && <div className="landing__img-overlay-open"></div>}
                    </div>

                    <div onMouseEnter={e=>setPartnerOpen(true)} className="landing__partner-img-container">
                        <img src={manImg} alt="" className="landing__partner-img" />
                        {!partnerOpen &&<div className="landing__img-overlay-partner"></div>}

                    </div>
                    <div className="landing__"
                </div>

            </section>)
}

export default PartnerStore