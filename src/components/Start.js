// Components
import Header from './Header';

const Start = (props) => {
    const { setStep } = props;

    return (
        <div className='bg-white mt-4 text-base sm:text-xl w-9/12 sm:w-7/12 md:w-6/12 lg:w-5/12 p-4 m-3 border-solid hover:border-dashed border-2 border-theme-orange rounded-md drop-shadow-xl flex items-center flex-col'>
            <Header />
            <StartButton
                buttonTitle={'Start QUIZ!'}
                setStep={setStep}
            />
        </div>
    )
}

const StartButton = (props) => {
    const { buttonTitle, setStep } = props;

    return (
        <div className='button-container flex justify-center'>
            <button
                onClick={() => setStep(2)}
                className='font-bold bg-theme-orange py-1 px-2 rounded-md hover:scale-110 active:bg-theme-orange-active mt-3'
            >{buttonTitle}</button>
        </div>
    )
}

export default Start;