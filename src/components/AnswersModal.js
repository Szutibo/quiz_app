import React from 'react'

const AnswersModal = (props) => {
    const { setDisplayModal, results, data } = props;

    const onClose = () => {
        setDisplayModal(false);
    }

    return (
        <div className='modal'>
            <ModalBackground onClose={onClose}>
                <ModalCard >
                    <ModalHeader />
                    <ModalContent>
                        <ModalAnswers
                            results={results}
                            data={data}
                        />
                    </ModalContent>
                    <CloseButton
                        onClose={onClose}
                    />
                </ModalCard>
            </ModalBackground >
        </div >
    )
}

const ModalBackground = (props) => {
    return (
        <div
            className='modal-background fixed inset-0 bg-body bg-opacity-75 flex flex-col items-center pt-16'
            onClick={props.onClose}
        >{props.children}</div>
    )
}

const ModalCard = (props) => {
    return (
        <div
            className='modal-card bg-white h-4/5 w-10/12 sm:w-9/12 md:w-8/12 lg:w-6/12 p-5 border-solid border-2 border-theme-orange rounded-md drop-shadow-xl fixed top-12 overflow-y-scroll'
        >{props.children}</div>
    )
}

const ModalHeader = () => {
    return (
        <div className='modal-header flex flex-col flex-wrap flex-end'>
            <h1 className='font-bold mb-1'>Your answers:</h1>
            <hr className='bg-theme-orange h-1 my-3' />
        </div>
    )
}

const ModalContent = ({ children }) => {
    return (
        <div className='modal-content'>
            {children}
        </div>
    )
}

const ModalAnswers = (props) => {
    const { results, data } = props;

    return (
        <ul className='modal-answers p-1'>
            {results.map((result, i) => {
                return (
                    <li key={i} className='my-12 bg-body p-3 rounded'>
                        <p className='text-sm sm:text-base font-semibold'>{result.question}</p>
                        <p className={`p-1 my-2 font-semibold text-sm sm:text-base text-white ${result.answer === data.data[i].answer ? 'bg-good-answer' : 'bg-wrong-answer'}`}>Your answer: {result.answer}</p>
                        {result.answer !== data.data[i].answer && <p className='p-1 my-2 font-semibold text-sm sm:text-base bg-sky-600 text-white'>Correct answer: {data.data[i].answer}</p>}
                    </li>
                )
            })}
        </ul>
    )
}

const CloseButton = ({ onClose }) => {
    return (
        <div className='flex justify-center mb-2'>
            <button
                className='bg-theme-orange px-3 py-1 font-bold rounded hover:scale-110 active:bg-theme-orange-active'
                onClick={onClose}
            >Got it!</button>
        </div>
    )
}

export default AnswersModal;