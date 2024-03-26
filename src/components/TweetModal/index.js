import Modal from "../Modal";
import React from "react";
import {DotIcon} from "../../assests/icon/dotIcon";
import {dateParser} from "../../utils";
import "./styles.css";

const TweetModal = (props) => {

    const {onClose, backgroundColor, textColor, avatar, nickname, username, date, content, isOpen} = props;

    return (
        <Modal isOpen={isOpen} onClose={onClose} backgroundColor={backgroundColor} textColor={textColor}>
            <div className="tweerModalPosterContainer">
                <div className="tweetModalPosterInfo">
                    <img src={avatar} alt="" className="otherUserAvatar"/>
                    <text className="body1bold">{nickname}</text>
                    <text className="body1" style={{color: "#747F86"}}>@{username}</text>
                    <DotIcon/>
                    <text className="body1" style={{color: "#747F86"}}>{dateParser(date)}</text>
                </div>
            </div>
            <div className="tweetModalContent">
                <text>{content}</text>
            </div>
        </Modal>
    )
}

export default TweetModal;