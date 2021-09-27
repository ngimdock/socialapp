import {Button} from 'react-bootstrap';

function Contact({contact, onDeleteContact}) {

    const getPseudo = (name) => {
        const randomNumber = Math.floor(Math.random()*100) +1;
        return ` @${name}${randomNumber}`; 
    }

    return (
        <div className="contact">
            <div>
                <img 
                    src={require(`../resources/images/${contact.img}`).default} 
                    alt="zemfack" 
                    className="avatar" 
                    width="100px" />
            </div>

            <div>
                <p className="name">
                    {
                        contact.name.length <= 6 ? contact.name : contact.name.substring(0, 5) + ".."
                    }
                </p>
                <p className="pseudo">
                    {
                        getPseudo(contact.name) <= 5 ? getPseudo(contact.name) : getPseudo(contact.name).substring(0, 6) + ".."
                    }
                </p>
            </div>
            <Button onClick={() => onDeleteContact(contact.id)}>Suivre</Button>
        </div>
    );
}

export default Contact;