import CGCard, { CGCardSlim } from "./CGCard"
import CatmanImg from "../../assets/image/tsunami.jpg"



const CGBar = ({slim, style}) => {

    return (
        // <div className="landing__cg-card-outer-container">
            <div style={style} className="landing__cg-card-container">
                <CGCard text={"2D Assets"} slim={slim} img={CatmanImg} />
                <CGCard text={"3D Assets"} slim={slim} img={CatmanImg} />
                <CGCard text={"Game-ready"} slim={slim} img={CatmanImg} />
                <CGCard text={"VR"} slim={slim} img={CatmanImg} />
                <CGCard text={"AR Models"} slim={slim} img={CatmanImg} />
                <CGCard text={"Plugins/Tools"} slim={slim} img={CatmanImg} />
                <CGCard text={""} slim={slim} img={CatmanImg} />
                <CGCard text={""} slim={slim} img={CatmanImg} />
                <CGCard text={""} slim={slim} img={CatmanImg} />
                <CGCard text={""} slim={slim} img={CatmanImg} />
            </div>
        // </div>

    )
}

export const CGBarSlim = ({style}) => {
    return <div style={style} className="landing__cg-card-container-slim">
        <CGCardSlim text={""} img={CatmanImg} />
        <CGCardSlim text={""} img={CatmanImg} />
        <CGCardSlim text={""} img={CatmanImg} />
        <CGCardSlim text={""} img={CatmanImg} />
        <CGCardSlim text={""} img={CatmanImg} />
        <CGCardSlim text={""} img={CatmanImg} />
        <CGCardSlim text={""} img={CatmanImg} />
        <CGCardSlim text={""} img={CatmanImg} />
        <CGCardSlim text={""} img={CatmanImg} />
        <CGCardSlim text={""} img={CatmanImg} />
    </div>
}

export default CGBar