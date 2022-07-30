import CGCard from "./CGCard"
import CatmanImg from "../../assets/image/tsunami.jpg"



const CGBar = ({slim, style}) => {

    return (
        // <div className="landing__cg-card-outer-container">
            <div style={style} className="landing__cg-card-container">
                <CGCard slim={slim} img={CatmanImg} />
                <CGCard slim={slim} img={CatmanImg} />
                <CGCard slim={slim} img={CatmanImg} />
                <CGCard slim={slim} img={CatmanImg} />
                <CGCard slim={slim} img={CatmanImg} />
                <CGCard slim={slim} img={CatmanImg} />
                <CGCard slim={slim} img={CatmanImg} />
                <CGCard slim={slim} img={CatmanImg} />
                <CGCard slim={slim} img={CatmanImg} />
                <CGCard slim={slim} img={CatmanImg} />
            </div>
        // </div>

    )
}

export const CGBarSlim = ({style}) => {
    <div style={style} className="landing__cg-card-container">
                <CGCard img={CatmanImg} />
                <CGCard img={CatmanImg} />
                <CGCard img={CatmanImg} />
                <CGCard img={CatmanImg} />
                <CGCard img={CatmanImg} />
                <CGCard img={CatmanImg} />
                <CGCard img={CatmanImg} />
                <CGCard img={CatmanImg} />
                <CGCard img={CatmanImg} />
                <CGCard img={CatmanImg} />
            </div>
}

export default CGBar