import {Form, Formik} from "formik";
import Button from "../Button";
import {Landscape} from "../../assests/icon/landscape";
import "./styles.css";
import {useState} from "react";
import CustomTextField from "../CustomTextField";
import Avatar from "../../assests/image/Avatar.svg";

const NewTweet = () => {

    const [tweetText, setTweetText] = useState('');
    const [buttonVariant, setButtonVariant] = useState('disabled');

    const handleTweetInputChange = (event) => {
        const newText = event.target.value;
        setTweetText(newText);
        setButtonVariant(newText.trim().length > 0 ? 'default' : 'disabled');
    };


    return (
        <div className="newTweetContainer">
            <div className="newTweetBox">
                <img src={Avatar} alt="avatar" className="avatar"/>
                <Formik
                    initialValues={{ tweet: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    <Form className="newTweetTextField">
                        <CustomTextField
                            name="tweet"
                            placeholder="What's happening?"
                            variant="newTweet"
                            value={tweetText}
                            onChange={handleTweetInputChange}
                            noBorder
                            noOutLine

                        />
                    </Form>
                </Formik>
            </div>
            <div className="postANewTweet">
                <Landscape />
                <Button
                    size="small"
                    variant={buttonVariant}
                >
                    Tweet
                </Button>
            </div>
        </div>
    );
};

export default NewTweet;