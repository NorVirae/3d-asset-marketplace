import CGCard from "./CGCard"
import CatmanImg from "../../assets/image/catman.jpg"



const CGBar = ({slim, style}) => {

    return (
        <div className="landing__cg-card-container">
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
                <CGCard slim={slim} img={CatmanImg} />
            </div>
        </div>

    )
}

export default CGBar