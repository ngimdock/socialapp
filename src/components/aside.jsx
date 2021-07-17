import Contact from './contact';

function SideBar({contactList, onDeleteContact}) {
    return(
        <aside className="asideBar">
            <div className="suggestions">SUGGESTIONS</div>
            <div className="contact-container">
                {
                    contactList.map(contact => 
                        <Contact 
                            contact={contact} 
                            key={contact.id} 
                            onDeleteContact={onDeleteContact}
                        />
                    )
                }
            </div>
        </aside>
    );
}

export default SideBar;