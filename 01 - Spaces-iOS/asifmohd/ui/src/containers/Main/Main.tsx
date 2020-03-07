import React from 'react';
import Flickity from 'react-flickity-component';
import './Main.scss';
import '../../styles/flickity.css';
import Card from '../../components/card/Card';

const flickityOptions = {
  initialIndex: 0,
  imagesLoaded: true,
  cellAlign: 'center',
  pageDots: false,
  prevNextButtons: false
};

const Main = () => (
  <main>
    <Flickity
      className={'carousel'}
      elementType={'div'}
      options={flickityOptions}
    >
      <Card src={'http://unsplash.it/300/?image=129'} />
      <Card src={'http://unsplash.it/300/?image=229'} />
      <Card src={'http://unsplash.it/300/?image=529'} />
    </Flickity>
  </main>
);
export default Main;
