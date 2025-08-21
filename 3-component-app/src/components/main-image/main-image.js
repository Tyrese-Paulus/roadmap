import './main-image.css'

function Image({ image }){
    return (
       <div className="center">
            <img className="main-img" src={image.src}></img>
       </div>
    )
}

export default Image;