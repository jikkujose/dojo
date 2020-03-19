import React, { useEffect } from 'react';
import Flickity, { FlickityOptions } from 'react-flickity-component';
import './Main.scss';
import '../../styles/flickity.css';
import Card from '../../components/Card/Card';
import spaces from './../../model/spacesdata.json';

const flickityOptions: FlickityOptions = {
  initialIndex: 0,
  imagesLoaded: true,
  cellAlign: 'center',
  pageDots: false,
  prevNextButtons: false,
  lazyLoad: 3
};

export type ParellaxMap = Number[];
const imgRefList: HTMLImageElement[] = [];
let flktyRef: Flickity;

const flkityParallaxOnScroll = imgRef => {
  flktyRef.on('scroll', e => {
    const slides = flktyRef.slides as Array<any>;
    slides.forEach((slide, i) => {
      let offset = (+(slide['target'] + flktyRef['x']) * -1) / 3;
      imgRef[i].style.transform = 'translateX(' + offset + 'px) scale(1.3) ';
    });
  });
};
const scrollHandler = (imgRef: HTMLImageElement) => {
  if (flktyRef && imgRef) {
    imgRefList.push(imgRef);
    if (imgRefList.length === spaces.length) flkityParallaxOnScroll(imgRefList);
  }
};
const Main = () => {
  useEffect(() => {
    flktyRef.on('lazyLoad', function(event) {
      var img = event.target;
      console.log(event.type, img.src);
    });
  }, []);
  return (
    <main>
      <Flickity
        flickityRef={ref => (flktyRef = ref)}
        className={'carousel'}
        elementType={'div'}
        options={flickityOptions}
      >
        {spaces.map((space, i) => (
          <Card space={space} key={space.id} onScroll={scrollHandler} />
        ))}
      </Flickity>
    </main>
  );
};
export default Main;
