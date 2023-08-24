import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function ImageCarousel() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img src='/FFVII-CloudChocobo.png' className='w-100'/>
        <Carousel.Caption>
          <h3>Tell Dad Jokes, Get a New Ride</h3>
          <p>"I love the shiny feathers and smooth hand."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/webpc-passthru.png' className='w-100'/>
        <Carousel.Caption>
          <h3>Big Birds Only</h3>
          <p>"It's not elitism. I have standards."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/1442900074.veyz_chocobo_gf.png' className='w-100'/>
        <Carousel.Caption>
          <h3>Family Fun</h3>
          <p>
            "Out in the sticks finding weird creatures is all we have!"
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;