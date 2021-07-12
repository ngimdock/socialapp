// import logo from './logo.svg';
import React, {useState} from 'react';

import NavBar from './navBar';
import SideBar  from './aside';
import Main from './Main';
import Footer from './footer';

import '../css/App.css';

function App() {

  const [userList, setUserList] = useState([
    {
      id : 1,
      name : "dan",
      imageSrc : "../resources/images/dan.jpg",
      text : "je suis ce que je suis et je deviendrais ce que je serais dan"
    },

    {
      id : 2,
      name : "dilane",
      imageSrc : "../resources/images/dilane.jpg",
      text : "je suis ce que je suis et je deviendrais ce que je serais dilane"
    },
    {
      id : 3,
      name : "stanela",
      imageSrc : "../resources/images/stanela.jpg",
      text : "je suis ce que je suis et je deviendrais ce que je serais stanela"
    },
    {
      id: 4,
      name : "blondelle",
      imageSrc : "../resources/images/blondelle.jpg",
      text : "je suis ce que je suis et je deviendrais ce que je serais blondelle"
    }
  ]);

  return (
    <section className="App">
      <NavBar />
      <SideBar contactList={userList} />
      <Main publicationList={userList} />
      <Footer />
    </section>
  );
}

export default App;
