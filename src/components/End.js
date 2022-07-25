import React from 'react';
import { useEffect, useState } from 'react';

const End = ({ results, data, onReset, setDisplayModal }) => {
    const [correctAnswers, setCorrectAnswers] = useState(0);

    useEffect(() => {
        let correct = 0;
        results.forEach((result, index) => {
            if (result.answer === data.data[index].answer) {
                correct++;
            }
        });
        setCorrectAnswers(correct);

    }, [results, data])

    const onAnswersCheck = () => {
        setDisplayModal(true);
    }


    return (
        <div className='bg-white mt-4 w-2/5 p-4 m-3 border-solid hover:border-dashed border-2 border-theme-orange rounded-md drop-shadow-xl flex items-center flex-col'>
            <Results
                correctAnswers={correctAnswers}
                data={data}
            />
            <EndButton
                title={'Check your answers'}
                method={onAnswersCheck}
            />
            <EndButton
                title={'Try again!'}
                method={onReset}
            />
        </div>
    )
}

const Results = (props) => {
    const { correctAnswers, data } = props;

    return (
        <div className='results mb-2 flex flex-col items-center'>
            <h1 className='font-bold text-3xl'>Your results:</h1>
            <p className={`font-semibold text-2xl ${correctAnswers <= 3 ? 'text-red-600' : 'text-green-600'}`}>{correctAnswers} of {data.data.length}</p>
            <p className='font-semibold text-2xl'>{Math.floor((correctAnswers / data.data.length) * 100)}%</p>
        </div>
    )
}

const EndButton = (props) => {
    const { title, method } = props;

    return (
        <div className='button-container flex justify-center'>
            <button
                onClick={method}
                className='font-bold bg-theme-orange py-1 px-2 rounded-md hover:scale-110 active:bg-theme-orange-active mt-3'
            >{title}</button>
        </div>
    )
}

export default End