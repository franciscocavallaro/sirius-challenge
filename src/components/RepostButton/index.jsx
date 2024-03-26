import {RepostIcon} from "../../assests/icon/repostIcon";
import "./styles.css";

const LikeButton = ({isReposted, repostAmount, onClick}) => {

    return (
        <button className={"repostButton " + (isReposted && "reposted")} onClick={onClick}>
            <div className="repostButtonContent">
                <RepostIcon width={16} height={16} color={isReposted ? "#70BE7C" : "#747F86"}/>
                <p style={{color: isReposted ? "#70BE7C" : "#747F86"}}>{repostAmount}</p>
            </div>
        </button>
    )
}

export default LikeButton