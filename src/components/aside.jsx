import Contact from './contact';

function SideBar({contactList}) {
    return(
        <aside className="asideBar">
            <div className="suggestions">SUGGESTIONS</div>
            {
                contactList.map(contact => <Contact contact={contact} key={contact.id}/>)
            }
        </aside>
    );
}

export default SideBar;