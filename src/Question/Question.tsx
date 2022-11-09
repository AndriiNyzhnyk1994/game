import React from 'react';
import {QuestionType} from "../store/reducer";


type PropsType = {
    count: number
    randomQuestion: QuestionType
    onAnswer: (questionId: number, isCorrect: boolean) => void
}


const Question = (props: PropsType) => {
    const {count, randomQuestion, onAnswer} = props

    return (
        <div className={'questionWrapper'}>
            <img className={'questionImage'} src={randomQuestion.photo} alt="photo"/>
            <h3>{`${count}. Хто на фото?`}</h3>
            <div className={'variants'}>
                {randomQuestion.variants.map(v => {
                    const onAnswerHandler = () => {
                        onAnswer(randomQuestion.id, v.isCorrect)
                    }
                    return <button key={v.title}
                                   onClick={onAnswerHandler}
                                   className={'variantButton'}>{v.title}</button>
                })}
            </div>
        </div>
    );
};

export default Question;