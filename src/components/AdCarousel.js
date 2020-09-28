import React, { useState, useEffect } from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import api from '../api';
import AdCarouselBtn from './AdCarouselBtn';

function AdCarousel() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAdInfos = async () => {
      setAds(await api.getAdInfos());
    }
    fetchAdInfos();
  }, [ads])

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={20}
      totalSlides={ads.length}
    >
      <Slider>
        {ads.map(
          (ad, idx) => <Slide idx={idx} key={ad.id}>
            <img width="100%" height="100%" key={ad.id} src={ad.src} alt={ad.id} />
          </Slide>
        )}
      </Slider>
      <AdCarouselBtn direction="before" />
      <AdCarouselBtn direction="next" />
    </CarouselProvider>
  )
}

export default AdCarousel;