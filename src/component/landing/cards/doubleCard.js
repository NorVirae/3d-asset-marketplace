



const  DoubleCard = (img) => {

    return (
        <div className="landing__double-card">
            <div className="landing__images-container">
                <img src={img} alt="" className="landing__double-img-normal" />
                <img src={img} alt="" className="landing__double-img-grey" />
            </div>

            <div className="landing__double-text-container">
                <span className="landing__double-text-header">
                    Beach house with house with Rumps
                </span>

                <span className="landing__double-text-desc">
                    by pascal gartens in 3d assets
                </span>
            </div>
        </div>
    )
}

export default DoubleCard