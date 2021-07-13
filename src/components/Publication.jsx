
import Avatar from './avatar';

function Publication({pubInfo}) {

    const getPseudo = (name) => {
        const randomNumber = Math.floor(Math.random()*100) +1;
        return ` @${name}${randomNumber}`; 
    }

    return (
        <article className="publication-item">
            <div>
                <Avatar person={pubInfo} />
            </div>

            <div>
                <header>
                    <p>
                        <span className="name">{pubInfo.name}</span>
                        <span>.</span>
                        <span className="pseudo">{getPseudo(pubInfo.name)}</span>
                    </p>
                    <p>
                        <span>20 juin 2000</span>
                        <i className="bi bi-caret-down-fill"></i>
                    </p>
                </header>
                <div>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                    <PublicationInfo />
                </div>
            </div>
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