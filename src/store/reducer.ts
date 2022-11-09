import {gameState} from "./state";


export type VariantType = {
    title: string
    isCorrect: boolean
}

export type QuestionType = {
    id: number
    photo: string
    variants: Array<VariantType>
}
export type StateType = {
    count: number
    trueAnswersCount: number
    questions: Array<QuestionType>
    usedQuestions: Array<QuestionType>
}
export type OnAnswerActionType = {
    type: 'ON-ANSWER'
    isCorrect: boolean,
    questionId: number
}
export type TryAgainActionType = {
    type: 'TRY-AGAIN'
}
export type ActionType = OnAnswerActionType | TryAgainActionType


const initialState = gameState

export const reducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "ON-ANSWER": {
            const stateCopy = {...state}
            let newUsedQuestions: Array<QuestionType> = []
            const newQuestions = stateCopy.questions.filter(q => q.id !== action.questionId)
            const currentQuestion = stateCopy.questions.find(q => q.id === action.questionId)
            if(currentQuestion) {
                newUsedQuestions = [currentQuestion, ...stateCopy.usedQuestions]
            }
            if(action.isCorrect) {
                stateCopy.trueAnswersCount = stateCopy.trueAnswersCount + 1
            }

            return {
                ...stateCopy,
                count: state.count + 1,
                questions: newQuestions,
                usedQuestions: newUsedQuestions,
            }
        }
        case "TRY-AGAIN": {
            return {...initialState}
        }

        default: return state
    }
}


export const onAnswerAC = (questionId: number, isCorrect: boolean): OnAnswerActionType => {
    return {type:"ON-ANSWER", questionId, isCorrect}
}

export const tryAgainAC = (): TryAgainActionType => {
    return {type:"TRY-AGAIN"}
}

