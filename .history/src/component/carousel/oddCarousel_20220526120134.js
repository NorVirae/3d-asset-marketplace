


const OddCarousel = () => {

    return () =>{
        <section className="opnstore__start-selling-container">
                    <div className="opnstore__start-selling-inner-container">
                        <OddCar active={oddActive === 0}/>
                        <OddCard active={oddActive === 1}/>
                        <OddCard active={oddActive === 2} />
                        <OddCard active={oddActive === 3}/>
                        <OddCard active={oddActive === 4}/>
                    </div>
        </section>
    }
}

export default OddCarousel