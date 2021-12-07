import "./Button.scss";

type ButtonProps = {
    text: string;
    textSize?: "medium" | "large";
    clickHandler?: () => void;
}

const Button = ({text, textSize = "medium", clickHandler}: ButtonProps) => {
    return (
        <div onClick={clickHandler} className={`content-button ${textSize}-font-size`}>
            {text}
        </div>
    )
}

export default Button;