import './SpeechBox.scss';

type SpeechBoxPros = {
    text: string;
}

const SpeechBox = ({text}: SpeechBoxPros) => {
    return (
        <div className="speech-box">
            <p>{text}</p>
            <div className="box-tip"></div>
        </div>
    )
};

export default SpeechBox;