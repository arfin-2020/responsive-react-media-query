import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <Carousel className="w-50 container">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://st3.depositphotos.com/1017986/12808/i/950/depositphotos_128085380-stock-photo-auto-mechanic-man-or-smith.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thumbs.dreamstime.com/b/happy-auto-mechanic-man-smith-car-workshop-service-repair-maintenance-gesture-people-concept-smiling-showing-thumbs-up-78423946.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/male-mechanic-standing-by-a-car-and-smiling-at-the-camera-picture-id467714282?k=20&m=467714282&s=612x612&w=0&h=Wd74CyGfp705FeIE_XkzSCTMz8us4322esu1XDt8hEA="
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/portrait-of-car-mechanic-man-picture-id948417646?k=20&m=948417646&s=612x612&w=0&h=r1r8S6gOSD-uXzFzBYifX34Ru_LGgoIBscI-_pLFAuo="
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20Cavan%20Images,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1565730079/hsjruvck1zqsuzaiqcxi.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn8.dissolve.com/p/D2115_97_766/D2115_97_766_1200.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
