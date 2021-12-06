import Button from './Button';
import './Content.scss';
import SpeechBox from "./SpeechBox";

const speechText = 'Ahh the good ole days of Aspen in the 80s. Sex, drugs, and rock and roll. There wasn’t a care in the world within that great town of fresh powder (oh you were thinking of snow! Yeah that too). Man, the partying just never stopped...that was before the great avalanches began. The seismologists and geologists couldn’t figure out what caused them, but every occurrence was wiping out hundreds of park goers...'

const Content = () => {
    return (
        <div className="page-content">
            <SpeechBox text={speechText} />
            <div className="buttons">
                <Button text="That's enough old man" />
                <Button text="Tell me more!" />
            </div>
        </div>
    )
}

export default Content;