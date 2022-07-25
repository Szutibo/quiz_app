import { useRef, useState, useEffect } from 'react';

// Utility functions
import { deselectInput, deselectAllInput } from './Utility';

const Task = (props) => {
    const { buttonTitle, data, setAnswers, numberOfTasks, activeTask, setActiveTask, setStep } = props;
    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const inputWrapper = useRef();

    useEffect(() => {
        deselectInput(inputWrapper);
    }, [data]);

    const changeHandler = (e) => {
        setSelected(e.target.value);

        if (error) {
            setError('');
        }
    }

    const nextQuestion = () => {
        if (selected === '') {
            return setError('Please choose an answer!');
        }

        setAnswers(currentState => [...currentState, { question: data.question, answer: selected }]);
        setSelected('');
        deselectInput(inputWrapper);

        if (activeTask < numberOfTasks - 1) {
            setActiveTask(activeTask + 1);
        } else {
            setStep(3);
        }
    };

    return (
        <div className='bg-white text-base sm:text-lg mt-4 p-4 m-3 w-9/12 sm:w-8/12 md:w-7/12 lg:w-5/12 border-solid hover:border-dashed border-2 border-theme-orange rounded-md drop-shadow-xl'>
            <TaskHeader question={data.question} />
            {data.options.map((oneOption, i) => {
                return (
                    <TaskOption
                        key={i}
                        option={oneOption}
                        changeHandler={changeHandler}
                        inputWrapper={inputWrapper}
                    />
                )
            })
            }
            {error && <TaskError error={error} />}
            <TaskButton
                buttonTitle={buttonTitle}
                nextQuestion={nextQuestion}
                deselectAllInput={deselectAllInput}
            />
        </div>
    )
}

const TaskHeader = (props) => {
    const { question } = props;

    return (
        <div className='question-box font-bold cursor-default'>
            <h1>{question}</h1>
            <hr className='bg-theme-orange h-1 my-3' />
        </div>
    )
}

const TaskOption = (props) => {
    const { option, changeHandler, inputWrapper } = props;

    return (
        <div className='cursor-pointer my-2 hover:bg-slate-200 rounded p-2 pl-1' ref={inputWrapper}>
            <input
                className='mr-2'
                type='radio'
                name='option'
                value={option}
                onClick={(e) => changeHandler(e)}
            />
            {option}
        </div>
    )
}

const TaskButton = (props) => {
    const { buttonTitle, nextQuestion, deselectAllInput } = props;

    return (
        <div className='button-container flex justify-center'>
            <button
                onClick={() => {
                    deselectAllInput();
                    nextQuestion();
                }}
                className='font-bold bg-theme-orange py-1 px-2 rounded-md hover:scale-110 active:bg-theme-orange-active mt-3'
            >{buttonTitle}</button>
        </div>
    )
}

const TaskError = (props) => {
    return (
        <div className='cursor-default bg-wrong-answer rounded p-2 font-bold text-red-900'>
            {props.error}
        </div>
    )
}

export default Task;
export { TaskButton };