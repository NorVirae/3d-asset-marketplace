import CGCard, { CGCardSlim } from "./CGCard"
import CatmanImg from "../../assets/image/tsunami.jpg"



const CGBar = ({slim, style}) => {

    return (
        // <div className="landing__cg-card-outer-container">
            <div style={style} className="landing__cg-card-container">
                <CGCard text={""} slim={slim} img={CatmanImg} />
                <CGCard text={""} slim={slim} img={CatmanImg} />
                <CGCard text={""} slim={slim} img={CatmanImg} />
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
    return <div style={style} className="landing__cg-card-container-slim">
        <CGCardSlim img={CatmanImg} />
        <CGCardSlim img={CatmanImg} />
        <CGCardSlim img={CatmanImg} />
        <CGCardSlim img={CatmanImg} />
        <CGCardSlim img={CatmanImg} />
        <CGCardSlim img={CatmanImg} />
        <CGCardSlim img={CatmanImg} />
        <CGCardSlim img={CatmanImg} />
        <CGCardSlim img={CatmanImg} />
        <CGCardSlim img={CatmanImg} />
    </div>
}

export default CGBar