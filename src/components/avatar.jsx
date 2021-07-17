

function Avatar({person}) {
    const image = require(`../resources/images/${person.img}`).default;
    return <img src={image} alt="zemfack" className="avatar" width="100px" />;
}

export default Avatar;