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
                    <div style={{left: partnerOpen? "20%":"10%"}} className="landing__open-partner-label-container">
                        <div style={{backgroundColor: !partnerOpen? "#fff":"#16151C", opacity: !partnerOpen? "1":".99"}} className="landing__bg-label-partner">
                            <h2 className=""></h2>Open a Store
                            <p>open a free store and easily start selling your digital assets
                                &amps; resources
                            </p>
                        </div>

                        <div style={{backgroundColor: partnerOpen? "#fff":"#16151C", opacity: partnerOpen? "1":".99"}} className="landing__bg-label-open">
                            Become a partner
                            <p>Become an affiliate partner and earn a net 10% on All sales you help
                                refer.
                            </p>
                        </div>
                    </div>
                </div>

            </section>)
}

export default PartnerStore