import React, { useEffect } from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { connect } from 'react-redux';
import { getAdInfos } from '../../modules/ad';
import AdCarouselBtn from '../../components/AdCarouselBtn';

function AdCarousel({ adInfos, getAdInfos }) {
  useEffect(() => {
    getAdInfos();
  }, [])

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={20}
      totalSlides={adInfos && adInfos.length}
    >
      <Slider>
        {adInfos && adInfos.map((ad, idx) => 
          <Slide idx={idx} key={ad.id}>
            <img 
              width="100%" 
              height="100%" 
              key={ad.id} 
              src={ad.src} 
              alt={ad.id} 
            />
          </Slide>
        )}
      </Slider>
      <AdCarouselBtn direction="before" />
      <AdCarouselBtn direction="next" />
    </CarouselProvider>
  )
}

export default connect(
  state => ({
    adInfos: state.adReducer.adInfos,
  }),
  { getAdInfos }
)(AdCarousel);