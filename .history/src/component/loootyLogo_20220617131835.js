import { useEffect, useState } from "react"





const LoootyLogo = ({style, color="#8383b2"}) => {
    const logoCol = color

    const [yScroll, setYScroll] = useState(0)
    const handleScroll = (event) => {
        // console.log(window.scrollY, "hey")
        setYScroll(window.scrollY)
        console.log(yScroll)
        
    }

    useEffect(() => {
        console.log("hey")
        console.log(window.scrollY)
        window.addEventListener("scroll", (e) =>handleScroll(e));

    })

    return <div style={{ width: "7rem", height: "100%", alignItems: "center", display:"flex", justifyContent:"center", ...style}} className="loooty-logo">
                <svg style={{height: "100%", width: "100%"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.32 77.72">
                    <title>loooty logo</title>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <polygon className={`logo__hide-in ${yScroll > 100?"logo__in": "logo__out"}`} points="17.83 6.27 0 45.08 27.05 45.08 31.89 34.63 14.92 34.63 30.77 0 17.83 6.27" style={{opacity: `${yScroll/100 * 1}`, transform: `translateX(${yScroll}%)`, fill: logoCol}} />
                            <path d="M36.83,30.11l-6.93,15H44.32l6.94-15Zm5.84,10H36.23l3.09-6.69h6.45Z" style={{fill: logoCol}}/>
                            <path d="M52.35,30.11l-6.93,15H59.84l6.94-15Zm6.9,4.72a3.68,3.68,0,0,1-2.43,2.29l-.46,6.38H51.67l4-6.37a1.61,1.61,0,0,1-.92-2.3,3.48,3.48,0,0,1,3-2.15A1.53,1.53,0,0,1,59.25,34.83Z" style={{fill: logoCol}}/>
                            <path d="M67.93,30.11,61,45.08H75.42l6.94-15Zm5.84,10H67.33l3.09-6.69h6.45Z" style={{fill: logoCol}}/>
                            <polygon className={`logo__hide-in ${yScroll > 100?"logo__in": "logo__out"}`} points="92.56 13.81 89.15 21.3 79.33 21.3 76.41 27.56 86.3 27.56 78.29 45.08 88.34 45.08 96.36 27.56 99.88 27.54 110.1 21.3 99.21 21.3 105.63 7.33 92.56 13.81" style={{opacity: `${yScroll/100 * 1}`, transform: `translateX(${yScroll}%)`, fill: logoCol}}/>
                            <polygon className={`logo__hide-in ${yScroll > 100?"logo__in": "logo__out"}`} points="111.41 22.8 97.41 31.43 91.18 45.08 108.11 45.08 93.05 77.72 104.07 75.61 123.32 33.55 113.26 33.55 110.18 40.23 103.48 40.23 111.41 22.8" style={{opacity: `${yScroll/100 * 1}`, transform: `translateX(${yScroll*0.1}%)`, fill: logoCol}}/>
                        </g>
                    </g>
                </svg>
    </div>
}

export default LoootyLogo