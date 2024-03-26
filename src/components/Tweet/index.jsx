import {DotIcon} from "../../assests/icon/dotIcon";
import "./styles.css";
import RepostButton from "../RepostButton";
import {useState} from "react";
import LikeButton from "../LikeButton";
import {likeTweet, repostTweet} from "../../service/apis";
import CommentButton from "../CommentButton";
import {dateParser} from "../../utils";

const Tweet = (props) => {

    const {username, nickname, avatar, content, date, comments, reposts, likes, id} = props;

    const [liked, setLiked] = useState(false);
    const [likeAmount, setLikeAmount] = useState(likes);
    const [repostAmount, setRepostAmount] = useState(reposts);
    const [commentsAmount, setCommentsAmount] = useState(comments);
    const [reposted, setReposted] = useState(false);


    const handleLike = async (e, tweetId) => {
        e.stopPropagation(); //so that the tweet modal doesn't open
        setLiked(!liked);
        setLikeAmount(liked ? likeAmount - 1 : likeAmount + 1);
        try {
            const response = await likeTweet(tweetId);
            if (response.status === 200) {
                // axios handles the like
            }
        } catch (e) {
            console.error(e);
        }
    }

    const handleRepost = async (e, tweetId) => {
        e.stopPropagation(); //so that the tweet modal doesn't open
        setReposted(!reposted);
        setRepostAmount(reposted ? repostAmount - 1 : repostAmount + 1);
        try {
            const response = await repostTweet(tweetId);
            if (response.status === 200) {
                // axios handles the repost
            }
        } catch (e) {
            console.error(e);
        }
    }

    const handleComment = async (e, tweetId) => {
        e.stopPropagation(); //so that the tweet modal doesn't open
        try {
            // axios handles the comment
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="otherUserTweetContainer">
            <div className="posterInfoContainer">
                <div className="posterInfo">
                    <img src={avatar} alt="" className="otherUserAvatar"/>
                    <text className="body1bold">{nickname}</text>
                    <text className="body1" style={{color: "#747F86"}}>@{username}</text>
                    <DotIcon/>
                    <text className="body1" style={{color: "#747F86"}}>{dateParser(date)}</text>
                </div>
            </div>
            <div className="tweetContent">
                <text>{content}</text>
            </div>
            <div className="tweetStats">
                <CommentButton commentAmount={commentsAmount} onClick={(e) => handleComment(e, id)}/>
                <RepostButton isReposted={reposted} repostAmount={repostAmount} onClick={(e) => handleRepost(e, id)}/>
                <LikeButton isLiked={liked} likeAmount={likeAmount} onClick={(e) => handleLike(e, id)}/>
            </div>
        </div>
    )

}


export default Tweet;