import { dbService } from "fbase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const Home = ( {userObj} ) => {
    const [tweet, setTweet] = useState("");
    const [tweets, setTweets] = useState("");

    const getTweets = async () => {
        const dbTweets = await getDocs(collection(dbService, "tweets"));
        dbTweets.forEach((document) => {
            const tweetObject = {...document.data(), id: document.id};
            setTweets((prev) => [tweetObject, ...prev]);
        });
    };

    useEffect(() =>{
        getTweets();
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        await addDoc(collection(dbService, "tweets"), {
            text : tweet,
            createdAt : Date.now(),
            creatorId : userObj.uid,
        });
        setTweet("");
    };

    const onChange = (event) => {
        event.preventDefault();
        const {
            target: { value },
        } = event;
        setTweet(value);
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    value = {tweet}
                    onChange = {onChange}
                    type = "text"
                    placeholder = "What's on your mind?"
                    maxLength={120}
                />
                <input type ="submit" value = "Tweet" />
            </form>
            <div>
                {tweets.map((tweet) => (
                    <div key = {tweet.id}>
                        <h4>{tweet.text}</h4>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home;