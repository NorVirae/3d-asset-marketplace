


const FaqCard = ({question, answer}) => {

    return (
        <div className="opnstore__faq-qa">
            <h2 className="opnstore__faq-question">{question}</h2>
            <p className="opnstore__answer">
               {answer}
            </p>

        </div>
    )
}
export default FaqCard