import React from 'react';
import './App.scss';
import SwipeableViews from 'react-swipeable-views';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { ProductDetail } from '../components/ProductDetail';
import { useModal, Modal } from 'react-morphing-modal';
import 'react-morphing-modal/dist/ReactMorphingModal.css';
import FullScreenDialog from '../components/Dialog';

const styles = {
  root: {
    padding: '0 20px'
  },

  slide: {
    padding: 10,
    minHeight: 100
  }
};

function App() {
  const { close, modalProps, getTriggerProps } = useModal();
  return (
    <div className="App">
      <div className="Layout">
        <header className="Header">
          <Navbar></Navbar>
        </header>
        <section className="Content">
          <ul className="Products">
            <SwipeableViews style={styles.root}>
              <div style={Object.assign({}, styles.slide)}>
                <FullScreenDialog></FullScreenDialog>
              </div>
              <div style={Object.assign({}, styles.slide)}>
                <ProductCard></ProductCard>
              </div>
              <div style={Object.assign({}, styles.slide)}>
                <ProductCard></ProductCard>
              </div>
              <div style={Object.assign({}, styles.slide)}>
                <ProductCard></ProductCard>
              </div>
              <li>
                <span>
                  <button
                    {...getTriggerProps({ id: 'productDetail1' })}
                    className="Btn Product_btn"
                  >
                    Relate UI Kit
                  </button>
                </span>
              </li>

              <li>
                <span>InVision Craft</span>
              </li>
            </SwipeableViews>
            <Modal {...modalProps}>
              <ProductDetail closeModal={close} />
            </Modal>
          </ul>
        </section>
        <footer className="Footer">
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
}

export default App;
