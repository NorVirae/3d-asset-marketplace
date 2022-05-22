import manImg from "../../assets/image/man.jpg"
import deadManImg from "../../assets/image/deadman.jpg"
import { useState } from "react"

const ListExplainRight = ({style}) => {
    return (
        <section style={style} className="landing__partner-store-discuss">
                                <div className="landing__first-col-container">
                                    <div className="landing__first-col-box">

                                    </div>

                                    <p className="landing__first-col-text">
                                        Earn money everytime someone you refered makes a purchase
                                    </p>
                                </div>

                                <div className="landing__first-col-container">
                                    <div className="landing__first-col-box">

                                    </div>

                                    <p className="landing__first-col-text">
                                        passive income just from spreading the word about loooty
                                    </p>
                                </div>

                                <div className="landing__first-col-container">
                                    <div className="landing__first-col-box">

                                    </div>

                                    <p className="landing__first-col-text">
                                        Epic Library of curated content to choose from
                                    </p>
                                </div>
                            </section>
    )
}

const ListExplainLeft = ({style}) => {
    return (
        <section style={style} className="landing__partner-store-discuss">
                                <div className="landing__first-col-container">
                                    <div className="landing__first-col-box">

                                    </div>

                                    <p className="landing__first-col-text">
                                        Earn money everytime someone you refered makes a purchase
                                    </p>
                                </div>

                                <div className="landing__first-col-container">
                                    <div className="landing__first-col-box">

                                    </div>

                                    <p className="landing__first-col-text">
                                        passive income just from spreading the word about loooty
                                    </p>
                                </div>

                                <div className="landing__first-col-container">
                                    <div className="landing__first-col-box">

                                    </div>

                                    <p className="landing__first-col-text">
                                        Epic Library of curated content to choose from
                                    </p>
                                </div>
                            </section>
    )
}


const PartnerStore = () => {

    const [partnerOpen, setPartnerOpen] = useState(false)

    return (<section className="landing__open-partner-container">
                    
                <div className="landing__open-partner-inner-container">
                    <ListExplainRight />
                    
    clip-path: polygon(100% 100%, 0 100%, 0 100%, 0% 0, 95% 0);
                    <ListExplainLeft  style={{left: "4.3%", width: "30%", }}/>
                   <div onMouseEnter={e=>setPartnerOpen(false)} className="landing__open-img-container">
                        <img src={deadManImg} alt="" className="landing__open-img" />
                        {partnerOpen && <div className="landing__img-overlay-open"></div>}
                    </div>

                    <div onMouseEnter={e=>setPartnerOpen(true)} className="landing__partner-img-container">
                        <img src={manImg} alt="" className="landing__partner-img" />
                        {!partnerOpen &&<div className="landing__img-overlay-partner"></div>}

                    </div>
                    <div style={{left: partnerOpen? "20%":"10%"}} className="landing__open-partner-label-container">
                        <div onMouseEnter={e=>setPartnerOpen(false)} style={{backgroundColor: !partnerOpen? "#fff":"#16151C",
                        color: partnerOpen? "#fff":"#16151C",
                         opacity: !partnerOpen? "1":"1"}} className="landing__bg-label-partner">
                            <h2 className="landing__open-label-header">Open a Store</h2>
                            <p className="landing__open-label-desc">open a free store and easily start selling your digital assets
                                &amps; resources
                            </p>
                        </div>

                        <div onMouseEnter={e=>setPartnerOpen(true)} style={{backgroundColor: partnerOpen? "#fff":"#16151C",
                                        color: !partnerOpen? "#fff":"#16151C",
                         opacity: partnerOpen? "1":"1"}} className="landing__bg-label-open">
                            <h2 className="landing__partner-label-header">Become a partner</h2>
                            <p className="landing__partner-label-desc">Become an affiliate partner and earn a net 10% on All sales you help
                                refer.
                            </p>

                        
                        </div>

                        
                    </div>
                </div>

            </section>)
}

export default PartnerStore