import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../image/img1.jpg';
import img2 from '../../image/img2.jpg';
import img3 from '../../image/img3.jpg';

import './imageSlides.styles.scss'


// const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//     setDirection(e.direction);
// }
// const [index, setIndex] = (0);
// const [direction, setDirection] = (1);

class ImageSlide extends React.Component {
    render() {
        return (
            <div className='image-slide '>
                <Carousel  >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}
export default ImageSlide;