import './Section.css'
import { Carousel } from 'react-bootstrap';



const Section=()=>{
    return(
<>
<section>
<div className="carousel-container">
        <Carousel interval={2000}>
          <Carousel.Item>
          <a href="">
            <img
              className="d-block w-100"
              src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fu4bj3%2FbtsIhUhTSkm%2FnxOELhM1lp7KwAsSTKXvhk%2Fimg.jpg'
              id='slide1'
              alt="First slide"
            />
            </a>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <a href="">

            <img
              className="d-block w-100"
               id='slide2'
               src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fm92a1%2FbtsIfHkyaiF%2Fpn3h1jxvvElixKBZZwPUK0%2Fimg.jpg'
               alt="Second slide"
               />
            </a>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <a href="">

            <img
              className="d-block w-100"
              id='slide3'
              src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDdMwS%2FbtsIgMZE4aK%2Flkwprtq7Vg9Lxj1h6eGAu0%2Fimg.jpg'
              alt="Third slide"
            />
                        </a>

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
  </section>
</>
    );



};export default Section