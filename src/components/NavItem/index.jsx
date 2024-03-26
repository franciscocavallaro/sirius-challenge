import "./styles.css";

const NavItem = ({ children, leftIcon: LeftIcon, className}) => {

    return (
        <div className={className + " navItem"}>
            {!!LeftIcon && (<LeftIcon/>)}
            <text className="body1">{children}</text>
        </div>
    )
}

export default NavItem;