

function Avatar({ person }) {
    // const getImg = person.url ? person.url : 
    const image = require(`../resources/images/${person.img}`).default;
    return <img src={image} alt="zemfack" className="avatar" width="100px" />;
}

export default Avatar;