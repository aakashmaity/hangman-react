import getStyle from "./getButtonStyleType";

function Button({buttonType = 'button', text, styleType, onClickHandler}) {
    return (
        <button 
            type={buttonType}
            className={`px-4 py-2 ${getStyle(styleType)} ext-white rounded-md transition-all`}
            onClick={onClickHandler}
        >
        {text}
        </button>
    );
}

export default Button;