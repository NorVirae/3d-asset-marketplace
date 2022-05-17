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
                    <div className="landing__open-partner-label-container">
                        <div className="landing__bg-label-partner">
                            Open a Store
                            <p>open a free store and easily start selling your digital assets
                                &amps; resources
                            </p>
                        </div>

                        <div className="landing__bg-label-open">
                            Become a partner
                            <p>Become an affiliate partner and earn a net 10%</p>
                        </div>
                    </div>
                </div>

            </section>)
}

export default PartnerStore