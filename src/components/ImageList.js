import './ImageList.css'
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props =>{
    // Bu şekilde daha kısa yazılabilir
    //.map(({description,id,urls}) => { return <img alt={description} key={id} src={urls.regular} />}
    const images = props.images.map((image) =>{
        //image'e key koymamızın sebebi console'da hata alıyordu.
        return <ImageCard key={image.id} image={image} />
    });

    return(
        <div className="image-list">{images}</div>
    );

}

export default ImageList;