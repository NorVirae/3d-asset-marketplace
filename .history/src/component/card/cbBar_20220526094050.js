import CGCard from "./CGCard"
import CatmanImg from "../../assets/image/catman.jpg"



const CGBar = ({slim}) => {

    return (
        <div className="landing__cg-card-container">
            <CGCard slim={slim} img={CatmanImg} />
            <CGCard slim={slim} img={CatmanImg} />
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
    )
}

export default CGBar