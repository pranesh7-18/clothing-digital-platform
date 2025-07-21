import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './pages/page-components/ScrollToTop'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App