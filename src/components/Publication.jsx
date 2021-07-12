
import Avatar from './avatar';

function Publication({pubInfo}) {
    return (
        <article className="pub-item">
            <div>
                <Avatar person={pubInfo} />
            </div>

            <div>
                <head>
                    <p>
                        <span>{pubInfo.name}</span>
                        <span>{pubInfo.pseudo}</span>
                    </p>
                    <span>20 juin 2000</span>
                </head>
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis temporibus a
                        t, ullam neque placeat aliquam commodi ipsa minus cupiditate quis nobis. Id quas ul
                        lam magni provident. Amet repellendus dolores totam.
                        </p>
                </div>
                <PublicationInfo />
            </div>
        </article>
    );
}


function PublicationInfo(props) {
    return (
        <div className="pub-info">
            les informations ici.......
        </div>
    );
}
export default Publication;