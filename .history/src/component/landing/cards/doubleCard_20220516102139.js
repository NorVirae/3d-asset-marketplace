



const  DoubleCard = (img) => {

    return (
        <div className="landing__double-card">
            <div className="landing__images-container">
                <img src={img} alt="" className="landing__double-img-normal" />
                <img src={img} alt="" className="landing__double-img-grey" />
            </div>

            <div className="landing__double"
        </div>
    )
}

export default DoubleCard