import React from 'react';
import './App.scss';
import SwipeableViews from 'react-swipeable-views';
import Navbar from '../src/components/Navbar';
import Footer from './components/Footer';
import { ProductDetail } from './components/ProductDetail';
import { useModal, Modal } from 'react-morphing-modal';
import 'react-morphing-modal/dist/ReactMorphingModal.css';
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from '@material/react-card';

const styles = {
  root: {
    padding: '0 20px'
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
