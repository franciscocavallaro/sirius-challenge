import React, {useEffect, useState} from "react";
import "./styles.css";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import NewTweet from "../../components/NewTweet";
import TabsHome from "../../components/TabsHome";
import tweet from "../../components/Tweet";
import Tweet from "../../components/Tweet";
import {dateParser} from "../../utils";
import TweetModal from "../../components/TweetModal";
import {getTweets} from "../../service/apis";

const HomeScreen = () => {

    const [selectedTweet, setSelectedTweet] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tweets, setTweets] = useState([]);

    const openModal = (tweet) => {
        setSelectedTweet(tweet);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedTweet(null);
        setIsModalOpen(false);
    };

    const getTweetsList = async () => {
        try {
            return await getTweets()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTweetsList().then(
            (response) => {
                setTweets(response)
            }
        );
    }, [])

    return (
        <div className="homeContainer">
            <div className="column sidebarColumn"><Sidebar/></div>
            <div className="column feedColumn">
                <div className="homeHeader">
                    <text className="h5">Home</text>
                </div>
                <div className="feedColumns">
                    <TabsHome children={"For You"}/>
                    <TabsHome children={"Following"}/>
                </div>
                <div>
                    <NewTweet/>
                </div>
                <Feed items={tweets} render={(tweet) => <div onClick={() => openModal(tweet)}>
                    <Tweet
                        key={tweet.id}
                        username={tweet.author.username}
                        nickname={tweet.author.firstName + " " + tweet.author.lastName}
                        avatar={tweet.author.profilePicture}
                        content={tweet.content}
                        date={tweet.createdAt}
                        comments={tweet.comments.length}
                        reposts={tweet.reactions.filter(reaction => reaction.type === 'REPOST').length}
                        likes={tweet.reactions.filter(reaction => reaction.type === 'LOVE').length}
                        id={tweet.id}
                    />
                </div>}
                />
                <TweetModal isOpen={isModalOpen} onClose={closeModal} backgroundColor={"white"} textColor={"black"}
                            avatar={selectedTweet?.author.profilePicture} titleFont={"h6"}
                            date={dateParser(selectedTweet?.createdAt)}
                            nickname={selectedTweet?.author.firstName + " " + selectedTweet?.author.lastName}
                            username={selectedTweet?.author.username}
                            contentFont={"h5"} content={selectedTweet?.content}/>
            </div>
            <div className="column suggestionColumn"></div>
        </div>
    )

}

export default HomeScreen;