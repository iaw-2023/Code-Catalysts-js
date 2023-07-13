import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExample" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExample" data-slide-to="1"></li>
        <li data-target="#carouselExample" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/FKYD3QTA6FDS7MDIARNGSVN2D4.jpg" className="d-block w-100" alt="Camisetas" />
        </div>
        <div className="carousel-item">
          <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/CYFSCFERF5HQJD45L6KPBTDNDQ.jpg" className="d-block w-100" alt="Camisetas" />
        </div>
        <div className="carousel-item">
          <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blta98de91a895141b6/615f83e17283ff0af5758e32/cc106c47e88832d736a9f3aad9a55d5a07253d14.jpg" className="d-block w-100" alt="Camisetas" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
  );
};

export default Carousel;