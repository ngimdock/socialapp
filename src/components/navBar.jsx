import navBar from '../css/navBar.css';

function NavBar(){
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
                <div>
                    <img src="../resources/images/dan.jpg" alt="profil-pic" />
                </div>
            </nav>
        </header>
    );
}


export default NavBar;