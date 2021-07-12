

function Avatar({person}) {
    const image = require(`../resources/images/${person.img}`).default;
    console.log(person.img);
    // const im = "../resources/images/"+person.img;
    // console.log(require(im).default);
    
    return <img src={image} alt="zemfack" className="avatar" width="100px" />;
}

export default Avatar;