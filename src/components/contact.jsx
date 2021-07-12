import Avatar from './avatar';

function Contact({contact}) {

    const getPseudo = (name) => {
        const randomNumber = Math.floor(Math.random()*100) +1;
        return ` @${name}${randomNumber}`; 
    }

    return (
        <div className="contact">
            <div>
                <Avatar person={contact} />
            </div>

            <div>
                <p className="name">{contact.name}</p>
                <p className="pseudo">{getPseudo(contact.name)}</p>
            </div>

            <button>Suivre</button>
        </div>
    );
}

export default Contact;