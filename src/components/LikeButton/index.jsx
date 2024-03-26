import {LikeIcon} from "../../assests/icon/likeIcon";
import "./styles.css";

const LikeButton = ({isLiked, likeAmount, onClick}) => {

    return (
        <button className={"likeButton " + (isLiked && "liked")} onClick={onClick}>
            <div className="likeButtonContent">
                <LikeIcon width={16} height={16} color={isLiked ? "#E0245E" : "#747F86"}/>
                <p style={{color: isLiked ? "#E0245E" : "#747F86"}}>{likeAmount}</p>
            </div>
        </button>
    )
}

export default LikeButton