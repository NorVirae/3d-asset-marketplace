import CGCard, { CGCardSlim } from "./CGCard"
import CatmanImg from "../../assets/image/tsunami.jpg"



const CGBar = ({slim, style}) => {

    return (
        // <div className="landing__cg-card-outer-container">
            <div style={style} className="landing__cg-card-container">
                <CGCard text={"2D Assets"} slim={slim} img={CatmanImg} />
                <CGCard text={"3D Assets"} slim={slim} img={CatmanImg} />
                <CGCard logoStyle={{}} textStyle={{fontSize: ".8rem"}} text={"Game-ready, VR, AR Models"} slim={slim} img={CatmanImg} />
                <CGCard text={"Plugins/Tools"} slim={slim} img={CatmanImg} />
                <CGCard text={"Materials/Shaders"} slim={slim} img={CatmanImg} />
                <CGCard text={"Software Brushes"} slim={slim} img={CatmanImg} />
            </div>
        // </div>

    )
}

export const CGBarSlim = ({style}) => {
    return <div style={style} className="landing__cg-card-container-slim">
        <CGCardSlim text={"2D Assets"} img={CatmanImg} />
        <CGCardSlim text={"3D Assets"} img={CatmanImg} />
        <CGCardSlim textStyle={{fontSize: ".9rem"}} text={"Game-ready, VR, AR Models"} img={CatmanImg} />
        <CGCardSlim  text={"Plugins/Tools"} img={CatmanImg} />
        <CGCardSlim text={"Materials/Shaders"} img={CatmanImg} />
        <CGCardSlim text={"Software Brushes"} img={CatmanImg} />
        
    </div>
}

export default CGBar