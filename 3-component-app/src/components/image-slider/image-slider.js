import './image-slider.css'
import images from '../../images'

function Slider({ images, onSelectImage, selectedImage }) {
    return (
        <div className='slider'>
            {images.map((image) => (
                <img 
                    className='slider-image'
                    src={image.src}
                    onClick={() => onSelectImage(image)}
                    style={{
                        cursor: 'pointer',
                        border: selectedImage.src === image.src ? '2px solid blue' : 'none',
                    }}
                />
            ))}
        </div>
    )
}

export default Slider;