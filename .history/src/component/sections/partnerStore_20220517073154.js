import manImg from "../../assets/image/man.jpg"
import deadManImg from "../../assets/image/deadman.jpg"



const PartnerStore = () => {

    return (<section className="landing__open-partner-container">
                <div className="landing__open-partner-inner-container">

                   <div className="landing__open-img-container">
                        <img src={deadManImg} alt="" className="landing__open-img" />
                        <div className="landing__img-overlay"
                    </div>

                    <div className="landing__partner-img-container">
                        <img src={manImg} alt="" className="landing__partner-img" />
                    </div>

                </div>
            </section>)
}

export default PartnerStore