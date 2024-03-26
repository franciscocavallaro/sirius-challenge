import "./styles.css"

const Button = ({children, variant, onClick, size, className}) => {

    const fontSizes = {
        small: "miniBold",
        medium: "bodyBold",
        large: "body1",
    }

    const sizes = {
        small: "buttonSmall",
        medium: "buttonMedium",
        large: "buttonLarge",
    }

    const variants = {
        default: "buttonDefault",
        hover: "buttonHover",
        disabled: "buttonDisabled",
        close: "buttonClose"
    }

    return (
        <button className={`${variants[variant]} ${sizes[size]} ${fontSizes[size]} ${className} button`}
                onClick={onClick}>
            {children}
        </button>
    )

}

export default Button;