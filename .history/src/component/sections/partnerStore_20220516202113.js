import manImg from "../../assets/image/man.jpg"
import deadManImg from "../../assets/image/deadman.jpg"



const PartnerStore = () => {

    return (<section className="landing__open-partner-container">
                <div className="landing__open-partner-inner-container">

                    <img src={manImg} alt="" className="landing__open-img" />
                    <img src={deadManImg} alt="" />


                </div>
            </section>)
}

export default PartnerStore