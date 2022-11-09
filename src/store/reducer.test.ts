
import {ActionType, reducer, StateType, tryAgainAC} from "./reducer"
const startState: StateType = {
    count: 1,
    trueAnswersCount: 0,
    usedQuestions: [],
    questions: [
        {
            id: 1,
            photo: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/venom_2021_1_announcement_coming_this_november.jpg',
            variants: [
                {title: 'spider-man', isCorrect: false},
                {title: 'venom', isCorrect: true},
                {title: 'batman', isCorrect: false},
                {title: 'superman', isCorrect: false},
            ]
        },
        {
            id: 2,
            photo: 'https://i.pinimg.com/736x/a9/15/ef/a915efc80b449acc1e40d50a223dea89.jpg',
            variants: [
                {title: 'wolverine', isCorrect: false},
                {title: 'flash', isCorrect: false},
                {title: 'green goblin', isCorrect: true},
                {title: 'scorpion', isCorrect: false},
            ]
        },
    ]
}
test('correct answer should be accepted', () => {


    const action: ActionType = {type: "ON-ANSWER", questionId: 1, isCorrect: true}

    const endState = reducer(startState, action)

    expect(endState.trueAnswersCount).toBe(1)
    expect(endState.questions.length).toBe(1)
    expect(endState.questions[0].id).toBe(2)
    expect(endState.usedQuestions[0].id).toBe(1)

})

test('used questions should be moved to active questions', () => {
    const startState: StateType = {
        count: 2,
        trueAnswersCount: 2,
        usedQuestions: [
            {
                id: 1,
                photo: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/venom_2021_1_announcement_coming_this_november.jpg',
                variants: [
                    {title: 'spider-man', isCorrect: false},
                    {title: 'venom', isCorrect: true},
                    {title: 'batman', isCorrect: false},
                    {title: 'superman', isCorrect: false},
                ]
            },
            {
                id: 2,
                photo: 'https://i.pinimg.com/736x/a9/15/ef/a915efc80b449acc1e40d50a223dea89.jpg',
                variants: [
                    {title: 'wolverine', isCorrect: false},
                    {title: 'flash', isCorrect: false},
                    {title: 'green goblin', isCorrect: true},
                    {title: 'scorpion', isCorrect: false},
                ]
            },
        ],
        questions: []
    }

    const action: ActionType = tryAgainAC()

    const endState = reducer(startState, action)

    expect(endState.trueAnswersCount).toBe(0)
    expect(endState.count).toBe(1)
    expect(endState.questions.length).toBe(2)
    expect(endState.questions[0].id).toBe(1)
    expect(endState.usedQuestions.length).toBe(0)

})