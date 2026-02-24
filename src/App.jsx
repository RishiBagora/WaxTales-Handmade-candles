import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import CustomOrder from './pages/CustomOrder'
import Policies from './pages/Policies'
import Contact from './pages/Contact'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PageWrapper from './components/layout/PageWrapper'
import WhatsAppFloat from './components/common/WhatsAppFloat'
const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className='pt-[64px] lg:pt-[76px]'>
        <PageWrapper>
         <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/custom-order' element={<CustomOrder />} />
        <Route path='/policies' element={<Policies />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </PageWrapper>
       </div>
       <Footer/>
       <WhatsAppFloat/>
    </div>
  )
}

export default App