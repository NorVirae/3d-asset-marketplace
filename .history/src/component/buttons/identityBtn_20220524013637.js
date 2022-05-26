



const IdentityBtn = ({text, style}) => {
    return (
        <section style={style} className="landing__earn-more-container">
            <div className="landing__earn-more-container-inner">
                <div className="identity__btn-skew-container"
                <button className="landing__earn-more-btn">
                    <span className="landing__earn-more-btn-text">
                        {text}
                    </span>
                </button>
            </div>
        </section>
    )
}

export default IdentityBtn