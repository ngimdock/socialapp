import Contact from './contact';

function SideBar({contactList}) {
    return(
        <aside className="asideBar">
            <div className="suggestio">Suggestions</div>
            {
                contactList.map(contact => <Contact contact={contact} key={contact.id}/>)
            }
        </aside>
    );
}

export default SideBar;