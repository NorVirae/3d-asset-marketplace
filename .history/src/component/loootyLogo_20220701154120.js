import { useEffect, useState } from "react"





const LoootyLogo = ({style, color="#8383b2"}) => {
    const logoCol = color

    const [yScroll, setYScroll] = useState(1)
    const [yShift, setYShift] = useState(1)

    const handleAnimonScroll = (val) => {
        let newVal = 1 

        if ( val > 0){
            newVal = 1 / val * 10
        }

        console.log(newVal)
        return newVal

    }

    const handleMainLogoShift = (val) => {
        setYShift()
    }

    const handleScroll = (event) => {
        // console.log(window.scrollY, "hey")
        setYScroll(handleAnimonScroll(window.scrollY))
        
        
    }

    

    useEffect(() => {
        
        window.addEventListener("scroll", (e) =>handleScroll(e));

    },[])

    return <div style={{ width: "7rem", height: "100%", alignItems: "center", display:"flex", justifyContent:"center", ...style}} className="loooty-logo">
                <svg style={{height: "100%", width: "100%"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.32 77.72">
                    <title>loooty logo</title>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <polygon className={`logo__hide-in ${yScroll > 100?"logo__in": "logo__out"}`} points="17.83 6.27 0 45.08 27.05 45.08 31.89 34.63 14.92 34.63 30.77 0 17.83 6.27" style={{opacity: `${yScroll}`, transform: `translateX(${yScroll}%)`, fill: logoCol, strokeWidth: ".1rem", stroke:logoCol}} />
                            <path d="M36.83,30.11l-6.93,15H44.32l6.94-15Zm5.84,10H36.23l3.09-6.69h6.45Z" style={{fill: logoCol}}/>
                            <path d="M52.35,30.11l-6.93,15H59.84l6.94-15Zm6.9,4.72a3.68,3.68,0,0,1-2.43,2.29l-.46,6.38H51.67l4-6.37a1.61,1.61,0,0,1-.92-2.3,3.48,3.48,0,0,1,3-2.15A1.53,1.53,0,0,1,59.25,34.83Z" style={{fill: logoCol}}/>
                            <path d="M67.93,30.11,61,45.08H75.42l6.94-15Zm5.84,10H67.33l3.09-6.69h6.45Z" style={{fill: logoCol}}/>
                            <polygon className={`logo__hide-in ${yScroll > 100?"logo__in": "logo__out"}`} points="92.56 13.81 89.15 21.3 79.33 21.3 76.41 27.56 86.3 27.56 78.29 45.08 88.34 45.08 96.36 27.56 99.88 27.54 110.1 21.3 99.21 21.3 105.63 7.33 92.56 13.81" style={{opacity: `${yScroll}`, transform: `translateX(${yScroll}%)`, fill: logoCol}}/>
                            <polygon className={`logo__hide-in ${yScroll > 100?"logo__in": "logo__out"}`} points="111.41 22.8 97.41 31.43 91.18 45.08 108.11 45.08 93.05 77.72 104.07 75.61 123.32 33.55 113.26 33.55 110.18 40.23 103.48 40.23 111.41 22.8" style={{opacity: `${yScroll}`, transform: `translateX(-${yScroll}%)`, fill: logoCol}}/>
                        </g>
                    </g>
                </svg>
    </div>
}



export const LoootyLogoSplit = ({style, color="#8383b2"}) => {

    const logoCol = color

    const [yScroll, setYScroll] = useState(1)
 

    const handleScroll = (event) => {
        // console.log(window.scrollY, "hey")
        setYScroll(window.scrollY)
        
        
    }

    const LogoAnimationEngine = () => {

    }

    useEffect(() => {
        
        window.addEventListener("scroll", (e) =>handleScroll(e));
        console.log(y)
    },[])

    return (
        <div style={{ width: "7rem", height: "100%", alignItems: "center", display:"flex", justifyContent:"center", ...style}} className="loooty-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 982.89 619.25">
        
                <title>logo slices</title>
                <polygon name="l-bottom-right" style={{fill: color}} points="253.71 276.37 215.21 359.49 79.99 359.49 118.73 276.37 253.71 276.37"/>
                <polygon name="l-bottom-left" style={{fill: color}} points="118.73 276.37 79.99 359.49 0 359.49 38.5 276.37 118.73 276.37"/>
                <polygon name="l-middle" style={{fill: color}} points="174.03 156.84 118.94 275.92 118.73 276.37 38.5 276.37 93.85 156.84 174.03 156.84"/>
                <polygon name="l-top" style={{fill: color}} points="246.59 0 174.03 156.84 93.85 156.84 143.31 50.05 246.59 0"/>
                <path style={{fill: color}} d="M318.66,263.57,263.54,382.66H378.26l55.23-119.09ZM365.13,343H313.9l24.62-53.2H389.8Z" transform="translate(-25.66 -23.16)"/>
                <path style={{fill: color}} d="M442.16,263.58,387,382.66H501.76L557,263.58Zm54.91,37.53c-2.5,7.95-10.91,16.31-19.38,18.23l-3.59,50.81H436.79L469,319.47c-7.54-1.72-10.39-10.21-7.29-18.36,3.6-9.46,14.18-17.12,23.63-17.12S500,291.65,497.07,301.11Z" transform="translate(-25.66 -23.16)"/>
                <path style={{fill: color}} d="M566.11,263.57,511,382.66H625.71l55.23-119.09ZM612.59,343H561.36l24.6-53.2h51.3Z" transform="translate(-25.66 -23.16)"/>
                <polygon name="t-bottom" style={{fill: color}} points="758.51 240.41 702.82 359.49 622.91 359.49 678.1 240.41 758.51 240.41"/>
                <polygon name="t-middle" style={{fill: color}} points="791.15 170.35 768.06 220.11 768 220.11 758.51 240.41 678.1 240.41 687.51 220.11 687.42 220.11 710.32 170.35 791.15 170.35"/>
                <polygon name="t-left" style={{fill: color}} points="710.32 170.35 687.42 220.11 607.95 220.11 631.12 170.35 710.32 170.35"/>
                <polygon name="t-right" style={{fill: color}} points="875.95 170.35 794.64 219.97 768.06 220.11 791.15 170.35 875.95 170.35"/>
                <polygon name="t-top" style={{fill: color}} points="843.15 57.76 791.03 170.35 710.58 170.35 738.66 109.61 843.15 57.76"/>
                <polygon name="y-tip" style={{fill: color}} points="887.68 181.28 860.31 240.41 791.82 240.41 887.68 181.28"/>
                <polygon name="y-top-1" style={{fill: color}} points="828.9 308.27 823.03 320.94 823.05 320.94 805.26 359.51 725.18 359.51 775.82 250.28 791.82 240.41 860.31 240.41 828.9 308.27"/>
                <polygon name="y-middle-1" style={{fill: color}} points="878.13 320.94 860.27 359.51 805.26 359.51 823.05 320.94 878.13 320.94"/>
                <polygon name="y-bottom-3" style={{fill: color}} points="982.89 267.79 940.33 359.57 860.26 359.57 860.29 359.51 860.27 359.51 878.13 320.94 878.16 320.94 902.8 267.79 982.89 267.79"/>
                <polygon name="y-bottom-2" style={{fill: color}} points="940.33 359.57 885.14 478.58 805.16 478.58 860.26 359.57 940.33 359.57"/>
                <polygon name="y-bottom-1" style={{fill: color}} points="885.14 478.58 827.72 602.41 740.02 619.25 805.16 478.58 885.14 478.58"/>

            </svg> 
        </div>  )
}
export default LoootyLogo