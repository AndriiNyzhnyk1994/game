import React from 'react';
import './App.css'
import dumbass from "./common/photos/dumbass.gif";
import tobey from "./common/photos/dancing-peter-parker.gif";
import tony from "./common/photos/tony.gif";


type PropsType = {
    count: number
    trueAnswersCount: number
    tryAgain: () => void
}

const TryAgain = (props: PropsType) => {

    const {count, trueAnswersCount, tryAgain} = props

    const congratsCreator = () => {
        if(trueAnswersCount <= 6) {
            return {image: dumbass, text: `Менi соромно за тебе, невдахо. Рахунок: ${trueAnswersCount} з ${count - 1}`}
        }else if(trueAnswersCount > 6 && trueAnswersCount <= 9) {
            return {image: tony, text: `Гру завершено! Непогано! Рахунок: ${trueAnswersCount} з ${count - 1}`}
        }else if(trueAnswersCount === 10) {
            return {image: tobey, text: `Гру завершено! Iдеально! Рахунок: ${trueAnswersCount} з ${count - 1}`}
        }
        return {}
    }


    return (
        <div className={'tryAgainWrapper'}>
            <img src={congratsCreator().image} alt="" className={'questionImage'}/>
            <h3 className={'congratsText'}>{congratsCreator().text}</h3>
            <button className={'variantButton'} onClick={tryAgain}>Грати ще</button>
        </div>
    );
};

export default TryAgain;