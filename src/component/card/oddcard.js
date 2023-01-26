import LoootyLogo, { LoootyLogoStatic } from "../loootyLogo"



const OddCard = ({style, active}) => {

    return (
        <div style={{...style, width: active?"25rem":"18rem", height: active?"15rem":"18vh"}} className="opnstore__odd-card">
            <div className="opnstore__odd-card-logo-overplace-container">
                <div className="opnstore__odd-card-logo-overplace" style={{top: active?"-20%":"-30%", padding: active?"2rem 4rem":".4rem 2rem"}}>
                    <div className="opnstore__odd-card-logo-backtrack">
                        <LoootyLogoStatic style={{width: "7rem"}} />
                    </div>
                </div>
            </div>

            <div className="opnstore__odd-card-title">
                Start Selling on Loooty
            </div>

            <div className="opnstore__odd-card-desc">
                <p>easiest platform to get started on and</p>
                <p> completely free</p>
            </div>
        </div>
    )
}

export default OddCard