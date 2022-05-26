import LoootyLogo from "../loootyLogo"



const OddCard = ({style, active}) => {

    return (
        <div style={{...style, width: active?"25rem":"none", height: active?"15rem":"none"}} className="opnstore__odd-card">
            <div className="opnstore__odd-card-logo-overplace-container">
                <div className="opnstore__odd-card-logo-overplace" style={{top: "-10%", padding: active?"3rem 3rem":"1rem 2rem"}}>
                    <div className="opnstore__odd-card-logo-backtrack">
                        <LoootyLogo style={{width: "7rem"}} />
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