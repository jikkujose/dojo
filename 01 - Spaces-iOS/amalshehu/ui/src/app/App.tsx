import React from 'react'
import './App.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { setCurrentDisplayType } from 'features/ProductDisplay/productDisplaySlice'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './rootReducer'
// import { ProductDetail } from 'features/ProductDetail/ProductDetail'
// import { ProductsList } from 'features/ProductList/ProductList'
import { ProductsListPage } from 'features/ProductList/ProductListPage'
// import { ProductsList } from 'features/ProductList/ProductList'

function App() {
  const dispatch = useDispatch()
  const { displayType, productId } = useSelector(
    (state: RootState) => state.productDisplay
  )
  const showProductsList = () => {
    dispatch(setCurrentDisplayType({ displayType: 'list', productId: null }))
  }

  showProductsList()

  console.log('displayType', displayType)
  let content: {} | null | undefined
  if (displayType === 'list') {
    content = (
      <>
        <ProductsListPage></ProductsListPage>
      </>
    )
  } else if (productId !== null) {
    content = <></>
  }
  return (
    <div className="App">
      <div className="Layout">
        <header className="Header">
          <Navbar></Navbar>
        </header>
        <section className="Content">{content}</section>
        <footer className="Footer">
          <Footer></Footer>
        </footer>
      </div>
    </div>
  )
}

export default App
