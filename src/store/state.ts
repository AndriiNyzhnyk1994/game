import carnage from '../common/photos/carnage.jpg'
import abomination from '../common/photos/abomination.jpg'
import scorpion from '../common/photos/scorpion.jpg'
import wolverine from '../common/photos/wolverine.jpg'
import goblin from '../common/photos/goblin.jpg'
import venom from '../common/photos/venom.jpg'
import tom from '../common/photos/tom.jpg'
import sabre from '../common/photos/sabre.jpg'
import magneto from '../common/photos/magneto.jpg'
import gambit from '../common/photos/gambit.jpg'

export const gameState = {
    count: 1,
    trueAnswersCount: 0,
    usedQuestions: [],
    questions: [
        {
            id: 1,
            photo: venom,
            variants: [
                {title: 'Людина павук', isCorrect: false},
                {title: 'Веном', isCorrect: true},
                {title: 'Звiр', isCorrect: false},
                {title: 'Карнаж', isCorrect: false},
            ]
        },
        {
            id: 2,
            photo: goblin,
            variants: [
                {title: 'Срiбний серфер', isCorrect: false},
                {title: 'Дедпул', isCorrect: false},
                {title: 'Зелений гоблiн', isCorrect: true},
                {title: 'Скорпiон', isCorrect: false},
            ]
        },
        {
            id: 3,
            photo: wolverine,
            variants: [
                {title: 'Шаблезубий', isCorrect: false},
                {title: 'Росомаха', isCorrect: true},
                {title: 'Звiр', isCorrect: false},
                {title: 'Карнаж', isCorrect: false},
            ]
        },
        {
            id: 4,
            photo: scorpion,
            variants: [
                {title: 'Електро', isCorrect: false},
                {title: 'Шторм', isCorrect: false},
                {title: 'Зелений гоблiн', isCorrect: false},
                {title: 'Скорпioн', isCorrect: true},
            ]
        },
        {
            id: 5,
            photo: abomination,
            variants: [
                {title: 'Гидота', isCorrect: true},
                {title: 'Мразота', isCorrect: false},
                {title: 'Сволота', isCorrect: false},
                {title: 'Свинота', isCorrect: false},
            ]
        },
        {
            id: 6,
            photo: carnage,
            variants: [
                {title: 'Гамбiт', isCorrect: false},
                {title: 'Гидота', isCorrect: false},
                {title: 'Чорна смерть', isCorrect: false},
                {title: 'Карнаж', isCorrect: true},
            ]
        },
        {
            id: 7,
            photo: tom,
            variants: [
                {title: 'Тобi Магуайр', isCorrect: false},
                {title: 'Ендрю Гарфiлд', isCorrect: false},
                {title: 'Том Холланд', isCorrect: true},
                {title: 'Деннi Сiгрен', isCorrect: false},
            ]
        },
        {
            id: 8,
            photo: sabre,
            variants: [
                {title: 'Росомаха', isCorrect: false},
                {title: 'Джаггернаут', isCorrect: false},
                {title: 'Шаблезубий', isCorrect: true},
                {title: 'Звiр', isCorrect: false},
            ]
        },
        {
            id: 9,
            photo: magneto,
            variants: [
                {title: 'Блейд', isCorrect: false},
                {title: 'Спавн', isCorrect: false},
                {title: 'Зелений гоблiн', isCorrect: false},
                {title: 'Магнiто', isCorrect: true},
            ]
        },
        {
            id: 10,
            photo: gambit,
            variants: [
                {title: 'Карнаж', isCorrect: false},
                {title: 'Мiстерiо', isCorrect: false},
                {title: 'Дедпул', isCorrect: false},
                {title: 'Гамбiт', isCorrect: true},
            ]
        },
    ]
}
