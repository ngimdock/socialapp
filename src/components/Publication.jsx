import {useState} from 'react';
import Avatar from './avatar';

function Publication({pubInfo}) {

    const [numberOfChat, setNumberOfChat] = useState(0);
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
                    <PublicationInfo />
                </main>
            </section>
        </article>
    );
}


function PublicationInfo(props) {
    return (
        <ul className="publication-info">
            <li><i className="bi bi-chat-left"></i> <span>23</span> </li>
            <li><i className="bi bi-bounding-box-circles"></i>  <span>23</span></li>
            <li><i className="bi bi-suit-heart"></i>  <span>23</span></li>
            <li><i className="bi bi-reply"></i>  <span>23</span></li>
        </ul>
    );
}
export default Publication;