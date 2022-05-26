import LoootyLogo from "../loootyLogo"



const OddCard = () => {

    return (
        <div className="opnstore__odd-card">
            <div className="opnstore__odd-card-logo-overplace-container">
                <div className="opnstore__odd-card-logo-overplace">
                    <div className="opnstore__odd-card-logo-backtrack"><LoootyLogo style={{width: "4rem"}} /></div>
                </div>
            </div>

            <div className="opnstore__odd-card-title">
                Start Selling on Loooty
            </div>

            <div className="opnstore__odd-card-desc">
                <p>easiest platform to get started on and</p>
                <p> completely free
            </div>
        </div>
    )
}

export default OddCard