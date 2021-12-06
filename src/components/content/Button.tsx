import "./Button.scss";

type ButtonProps = {
    text: string;
    clickHandler?: () => void;
}

const Button = ({text, clickHandler}: ButtonProps) => {
    return (
        <div onClick={clickHandler} className="content-button">
            {text}
        </div>
    )
}

export default Button;