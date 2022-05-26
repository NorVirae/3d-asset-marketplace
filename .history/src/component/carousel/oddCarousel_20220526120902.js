import { useEffect, useState } from "react"
import OddCard from "../card/oddcard"



const OddCarousel = () => {
    const [oddActive, setOddActive] = useState(1)
    useEffect(()=>{
        let activeInterval = setInterval(()=>{
            if(oddActive >= 0 && oddActive <= 4){
                setOddActive(oddActive => oddActive + 1)
                if(oddActive + 1 > 4){
                    setOddActive(0)
                }
                console.log(oddActive)
            }
          
        }, 2000)
        return ()=> clearInterval(activeInterval)
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