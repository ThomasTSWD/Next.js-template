import Image from 'next/image';

const Carousel = () => {
  return (
    <section id="phone" className="overflow-hidden py-16 md:py-20 lg:py-28 mx-auto text-center">
      <div className="container">
        <div className="carousel rounded-box">
          <div className="carousel-item">
            <Image src="/images/carousel/img1.jpg" alt="Burger" width={300} height={200} />
          </div>
          <div className="carousel-item">
            <Image src="/images/carousel/img2.jpg" alt="Burger" width={300} height={200} />
          </div>
          <div className="carousel-item">
            <Image src="/images/carousel/img3.jpg" alt="Burger" width={300} height={200} />
          </div>
          <div className="carousel-item">
            <Image src="/images/carousel/img1.jpg" alt="Burger" width={300} height={200} />
          </div>
          <div className="carousel-item">
            <Image src="/images/carousel/img2.jpg" alt="Burger" width={300} height={200} />
          </div>
          <div className="carousel-item">
            <Image src="/images/carousel/img3.jpg" alt="Burger" width={300} height={200} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
