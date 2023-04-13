import Marquee from "react-fast-marquee";

const MarqueeElement = ({children, speed, className}) => {
    
    return(
        <Marquee speed={speed} gradient={false} gradientWidth={0} className={className}>
           {children}
        </Marquee>
    )
}


export default MarqueeElement;