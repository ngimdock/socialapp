// import logo from './logo.svg';
import React, {useState} from 'react';

import NavBar from './navBar';
import SideBar  from './aside';
import Main from './Main';
import Footer from './footer';

import '../css/App.css';
import '../resources/icons-1.5.0/font/bootstrap-icons.css';

function App() {

  const [authorInfo, setAuthorInfo] = useState({
    name : "dan",
    img : "dan.jpg",
    text : "l'auteur du site à posté ce méssagge"
  });

  const [userList, setUserList] = useState([
    {
      id : 1,
      name : "nina",
      img : "nina.jpg",
      text : "je suis ce que je suis et je deviendrais ce que je serais dan"
    },
    {
      id : 2,
      name : "dilane",
      img : "dilane.jpg",
      text : "je suis ce que je suis et je deviendrais ce que je serais dilane"
    },
    {
      id : 3,
      name : "stanela",
      img : "stanela.jpg",
      text : "je suis ce que je suis et je deviendrais ce que je serais stanela"
    },
    {
      id: 4,
      name : "blondelle",
      img : "blondelle.jpg",
      text : "je suis ce que je suis et je deviendrais ce que je serais blondelle"
    },
    {
      id: 5,
      name : "donald",
      img : "donald.jpg",
      text : "je suis ce que je suis et je deviendrais ce que je serais blondelle"
    },
    {
      id: 6,
      name : "levine",
      img : "levine.jpg",
      text : "je suis ce que je suis et je deviendrais ce que je serais blondelle"
    },
    {
      id: 7,
      name : "corine",
      img : "corine.jpg",
      text : "je suis ce que je suis et je deviendrais ce que je serais blondelle"
    }
  ]);

  return (
    <>
      <NavBar authorInfo={authorInfo} />
      <SideBar contactList={userList} />
      <Main publicationList={userList} />
      <Footer />
    </>
  );
}

export default App;