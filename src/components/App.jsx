
import React, {useState} from 'react';

import NavBar from './navBar';
import SideBar  from './aside';
import Main from './Main';
import Footer from './footer';

import '../css/App.css';
import '../resources/icons-1.5.0/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  const authorInfo = {
    name : "dan",
    img : "dan.jpg",
    text : "l'auteur du site à posté ce méssagge"
  }

  const [userContactList, setUserContactsPubList] = useState([
    {
      id : 1,
      name : "nina",
      img : "nina.jpg"
    },
    {
      id : 2,
      name : "dilane",
      img : "dilane.jpg"
    },
    {
      id : 3,
      name : "stanela",
      img : "stanela.jpg"
    },
    {
      id: 4,
      name : "blondelle",
      img : "blondelle.jpg"
    },
    {
      id: 5,
      name : "donald",
      img : "donald.jpg"
    },
    {
      id: 6,
      name : "levine",
      img : "levine.jpg"
    },
    {
      id: 7,
      name : "corine",
      img : "corine.jpg"
    }
  ]);

  const handleDeleteContact = (id) => {
    const newContactList = userContactList.filter(contact => contact.id !== id);
    setUserContactsPubList(newContactList);
  }

  return (
    <>
      <NavBar authorInfo={authorInfo} />
      <SideBar contactList={userContactList} onDeleteContact={handleDeleteContact} />
      <Main />
      <Footer />
    </>
  );
}

export default App;