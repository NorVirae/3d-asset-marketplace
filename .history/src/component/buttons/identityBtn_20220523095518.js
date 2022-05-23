



const identityBtn = ({text}) => {
    return (
        <section className="landing__weekly-freebies-container">
            <button className="landing__weekly-freebies-btn">
                <span style={{transform: "skewX(25deg)"}}>{text}</span>
            </button>
        </section>
    )
}

export default identityBtn