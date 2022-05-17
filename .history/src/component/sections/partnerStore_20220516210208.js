import manImg from "../../assets/image/man.jpg"
import deadManImg from "../../assets/image/deadman.jpg"



const PartnerStore = () => {

    return (<section className="landing__open-partner-container">
                <div className="landing__open-partner-inner-container">

                   <div className="">
                        <img src={deadManImg} alt="" className="landing__open-img" />
                    </div>
                    <img src={manImg} alt="" className="landing__partner-img" />


                </div>
            </section>)
}

export default PartnerStore