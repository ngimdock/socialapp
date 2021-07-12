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
                <span>{contact.name}</span> <br />
                <span>{getPseudo(contact.name)}</span>
            </div>

            <button>Suivre</button>
        </div>
    );
}

export default Contact;