import React, {useCallback} from 'react';
import './App.css'
import {onAnswerAC, OnAnswerActionType, QuestionType, tryAgainAC, TryAgainActionType} from './store/reducer';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/redux-store";
import Question from "./Question/Question";
import TryAgain from "./TryAgain";


const App = () => {
  const count = useSelector<AppRootStateType, number>(state => state.reducer.count)
  const trueAnswersCount = useSelector<AppRootStateType, number>(state => state.reducer.trueAnswersCount)
  const questions = useSelector<AppRootStateType, Array<QuestionType>>(state => state.reducer.questions)
  const dispatch = useDispatch();


  const onAnswer = useCallback((questionId: number, isCorrect: boolean) => {
    const action: OnAnswerActionType = onAnswerAC(questionId, isCorrect)
    dispatch(action)
  }, [dispatch])

  const tryAgain = useCallback(() => {
    const action: TryAgainActionType = tryAgainAC()
    dispatch(action)
  }, [dispatch])

  const getRandomQuestion = () => {
    return questions[Math.floor(Math.random() * questions.length)]
  }
  let randomQuestion: QuestionType = getRandomQuestion();
  return (
      <div className={'App'}>
        {questions.length
            ? <Question
                count={count}
                randomQuestion={randomQuestion}
                onAnswer={onAnswer}
            />
            : <TryAgain
                count={count}
                trueAnswersCount={trueAnswersCount}
                tryAgain={tryAgain}
            />
        }
      </div>
  );
};

export default App;