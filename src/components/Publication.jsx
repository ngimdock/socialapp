import {useState} from 'react';
import Avatar from './avatar';

function Publication({pubInfo}) {

    const [numberOfChat, setNumberOfChat] = useState(0);
    const [numberOfTweet, setNumberOfTweet] = useState(0);
    const [numberOfLike, setNumberOfLike] = useState(0);
    const [numberOfShare, setNumberOfShare] = useState(0);

    const handleSetNumberOfChat = () => {
        setNumberOfChat(numberOfChat+1);
    };

    const handleSetNumberOfTweet = () => {
        setNumberOfTweet(numberOfTweet+1);
    };

    const handleSetNumberOfLike = () => {
        setNumberOfLike(numberOfLike+1);
    };  

    const getPseudo = (name) => {
        const randomNumber = Math.floor(Math.random()*100) +1;
        return ` @${name}${randomNumber}`; 
    }

    function formatDate(date) {
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        return `${day} / ${month+1} / ${year}`
    }

    return (
        <article className="publication-item">
            <aside>
                <Avatar person={pubInfo} />
            </aside>

            <section>
                <header className="pub-head">
                    <p>
                        <span className="name">{pubInfo.name}</span>
                        <span>.</span>
                        <span className="pseudo">{getPseudo(pubInfo.name)}</span>
                    </p>
                    <p>
                        <span>
                            { formatDate(pubInfo.date) }
                            <i className="bi bi-caret-down-fill"></i>
                        </span>
                        
                    </p>
                </header>
                <main className="pub-content">
                    <p>
                        {pubInfo.text}
                    </p>
                    <PublicationInfo
                        numberOfChat={numberOfChat}
                        onNumberOfChatChange={handleSetNumberOfChat}
                        numberOfTweet={numberOfTweet}
                        onNumberOfTweetChange={handleSetNumberOfTweet}
                        numberOfLike={numberOfLike}
                        onNumberOfLikeChange={handleSetNumberOfLike}
                        numberOfShare={numberOfShare}
                        onNumberOfShareChange={()=> setNumberOfShare(numberOfShare+1)}
                    />
                </main>
            </section>
        </article>
    );
}


function PublicationInfo(props) {
    const {
            numberOfChat,
            onNumberOfChatChange,
            numberOfTweet, 
            onNumberOfTweetChange,
            numberOfLike,
            onNumberOfLikeChange,
            numberOfShare,
            onNumberOfShareChange
          } = props;
    return (
        <ul className="publication-info">
            <li>
                <i className="bi bi-chat-left" onClick={onNumberOfChatChange}></i> 
                <span>{numberOfChat}</span> 
            </li>
            <li>
                <i className="bi bi-bounding-box-circles" onClick={onNumberOfTweetChange}></i>  
                <span>{numberOfTweet}</span>
            </li>
            <li>
                <i className="bi bi-suit-heart" onClick={onNumberOfLikeChange}></i>  
                <span>{numberOfLike}</span>
            </li>
            <li>
                <i className="bi bi-reply" onClick={onNumberOfShareChange}></i>  
                <span>{numberOfShare}</span>
            </li>
        </ul>
    );
}
export default Publication;