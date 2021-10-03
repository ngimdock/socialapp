import {useState} from 'react';
import { PostDropdown } from './tools/Dropdowns'

function Publication({ pubInfo }) {
    
    // state variable
    const [numberOfChat, setNumberOfChat] = useState(0);
    const [numberOfTweet, setNumberOfTweet] = useState(0);
    const [numberOfLike, setNumberOfLike] = useState(0);
    const [numberOfShare, setNumberOfShare] = useState(0);

    // handler
    const handleSetNumberOfChat = () => {
        setNumberOfChat(numberOfChat+1);
    };

    const handleSetNumberOfTweet = () => {
        setNumberOfTweet(numberOfTweet+1);
    };

    const handleSetNumberOfLike = () => {
        setNumberOfLike(numberOfLike+1);
    };  

    // functions 
    const getName = (str) => {
        return str
            .split("")
            .slice(0, 6)
            .join("")
    }

    const getPseudo = (name) => {
        const randomNumber = Math.floor(Math.random()*100) +1;
        return ` @${name}${randomNumber}`; 
    }


    return (
        <article className="publication-item">
            <aside>
                <img 
                    src={pubInfo.url} 
                    alt={pubInfo.title} 
                    className="avatar" 
                    width="100px" />
            </aside>

            <section>
                <header className="pub-head">
                    <p>
                        <span className="name">{getName(pubInfo.title)}</span>
                        <span>.</span>
                        <p className="pseudo">{getPseudo(getName(pubInfo.title))}</p>
                    </p>

                    <PostDropdown id={pubInfo.id} />

                </header>
                <main className="pub-content">
                    <p>
                        {pubInfo.title.repeat(5)}
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