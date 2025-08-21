import React, { useState } from 'react';
import Image from '../main-image/main-image';
import Slider from '../image-slider/image-slider';
import images from  '../../images';

function Core(){
    const [ selectedImage, setSelectedImage ] = useState(images[0]);

    return (
        <div>
            <Image image={selectedImage}/> 
            <Slider images={images} onSelectImage={setSelectedImage} selectedImage={selectedImage} />
        </div>
    )
}

export default Core;