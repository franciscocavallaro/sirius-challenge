import {CommentIcon} from "../../assests/icon/commentIcon";
import "./styles.css";

const CommentButton = ({commentAmount, onClick}) => {

    return (
        <button className={"commentButton"} onClick={onClick}>
            <div className="commentButtonContent">
                <CommentIcon width={16} height={16} color={"#747F86"}/>
                <p style={{color: "#747F86"}}>{commentAmount}</p>
            </div>
        </button>
    )
}

export default CommentButton