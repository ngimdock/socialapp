import Avatar from './avatar';

function NavBar({authorInfo}){
    console.log("hey-------------------------------------------------------------")
    console.log(authorInfo);
    return (
        <header className="navBar">
            <div className="logo">
                Socialapp
            </div>
            <nav className="navigation">
                <ul>
                    <li className="nav-items">ACTUALITÉ</li>
                    <li className="nav-items">MESSAGES</li>
                    <li className="nav-items">PARAMETRES</li>
                </ul>
                <div className="author-block">
                    <Avatar person={authorInfo} />
                    <i className="bi bi-caret-down-fill"></i>
                </div>
            </nav>
        </header>
    );
}


export default NavBar;