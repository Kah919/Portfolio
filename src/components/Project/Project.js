import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default props => {
    const { name, description, text, images} = props.data;

    const createText = () => {
        return text.map(data => <p> { data } </p>)
    }

    const carouselSlide = () => {
        return images.map(image => 
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ image }
                alt="Third slide"
                />
            </Carousel.Item>
        )
    }

    return(
        <div className="project">
          <div className="description">
            <h1> { name } </h1>
            <h3> { description } </h3>
            <br></br>
            { createText() }
          </div>

          <div className="project__image">
            <Carousel>
                { carouselSlide() }
            </Carousel>
          </div>
        </div>
    )
}