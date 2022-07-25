import { useState } from 'react';

// Components
import Task from './Task';
import Start from './Start';
import End from './End';
import AnswersModal from './AnswersModal';

const Content = (props) => {
    const { exercises, step, setStep, activeTask, setActiveTask, answers, setAnswers, win } = props;
    const [displayModal, setDisplayModal] = useState(false);

    const resetClickHandler = () => {
        setActiveTask(0);
        setAnswers([]);
        setStep(2);
    }

    return (
        <main className='py-16 flex flex-col items-center'>
            {step === 1
                && <Start
                    step={step}
                    setStep={setStep}
                />}
            {step === 2
                && <Task
                    data={exercises.data[activeTask]}
                    setAnswers={setAnswers}
                    answers={answers}
                    numberOfTasks={exercises.data.length}
                    activeTask={activeTask}
                    setActiveTask={setActiveTask}
                    buttonTitle={exercises.data.length === activeTask + 1 ? 'Evaluate' : 'Next Question'}
                    key={'key'}
                    setStep={setStep}
                />}
            {step === 3
                && <End
                    data={exercises}
                    results={answers}
                    onReset={resetClickHandler}
                    setDisplayModal={setDisplayModal}
                />}
            {displayModal
                && <AnswersModal
                    results={answers}
                    data={exercises}
                    setDisplayModal={setDisplayModal}
                />}
        </main>
    )
}

export default Content;