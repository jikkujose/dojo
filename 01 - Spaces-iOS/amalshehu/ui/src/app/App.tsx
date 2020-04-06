import React from 'react'
import './App.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { setCurrentDisplayType } from 'features/productsDisplay/productsDisplaySlice'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './rootReducer'
import { ProductsList } from 'features/ProductList/ProductList'

function App() {
  const dispatch = useDispatch()

  const showProductsList = () => {
    dispatch(setCurrentDisplayType({ displayType: 'list' }))
  }
  showProductsList()
  const { displayType } = useSelector(
    (state: RootState) => state.productsDisplay
  )
  console.log('displayType', displayType)

  return (
    <div className="App">
      <div className="Layout">
        <header className="Header">
          <Navbar></Navbar>
        </header>
        <section className="Content">
          {/* <ProductsList products={}></ProductsList> */}
        </section>
        <footer className="Footer">
          <Footer></Footer>
        </footer>
      </div>
    </div>
  )
}

export default App
