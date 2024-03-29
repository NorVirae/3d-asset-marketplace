



const  DoubleCard = ({img, title, ownerName, firstTag}) => {

    return (
        <div className="landing__double-card">
            <div className="landing__images-container">
                <img src={img} alt="" className="landing__double-img-normal" />
                <img src={img} alt="" className="landing__double-img-grey" />
            </div>

            <div className="landing__double-text-container">
                <span className="landing__double-text-header">
                    {title}
                </span>

                <span className="landing__double-text-desc">
                    by {ownerName} in {firstTag}
                </span>
            </div>
        </div>
    )
}

export default DoubleCard