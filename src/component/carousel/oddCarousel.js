import { useEffect, useState } from "react"
import OddCard from "../card/oddcard"



const OddCarousel = () => {
    const [oddActive, setOddActive] = useState(2)
    useEffect(()=>{
        let activeInterval = setInterval(()=>{

            setOddActive(oddAct => {
                let newOddAct = oddAct + 1
                if (oddAct + 1 > 4){
                    newOddAct = 0
                }
                return newOddAct
            })
            
          
        }, 8000)
       
    }, [])
    return (
        <section className="opnstore__start-selling-container">
            <div className="opnstore__start-selling-inner-container">
                <OddCard active={oddActive === 0}/>
                <OddCard active={oddActive === 1}/>
                <OddCard active={oddActive === 2} />
                <OddCard active={oddActive === 3}/>
                <OddCard active={oddActive === 4}/>
            </div>
        </section>
    )
}

export default OddCarousel