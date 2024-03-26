import "./styles.css"

const CustomTextField = ({ noBorder, noOutLine, fontSize, ...otherProps }) => {

    const inputStyle = {
        border: noBorder ? "none" : "",
        outline: noOutLine  ? 'none' : "",
        fontSize: fontSize ? fontSize : "inherit",
    };

    return (
        <div className="textFieldStyle">
            <input style={inputStyle} {...otherProps}></input>
        </div>
    )
}

export default CustomTextField