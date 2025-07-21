import './Shop.css'
import Products from "./page-components/Products"
import NewsLetter from './page-components/NewsLetter'
import Pagination from './page-components/Pagination'
import f1 from '../assets/products/f1.jpg'
import f2 from '../assets/products/f2.jpg'
import f3 from '../assets/products/f3.jpg'
import f4 from '../assets/products/f4.jpg'
import f5 from '../assets/products/f5.jpg'
import f6 from '../assets/products/f6.jpg'
import f7 from '../assets/products/f7.jpg'
import f8 from '../assets/products/f8.jpg'
import n1 from '../assets/products/n1.jpg'
import n2 from '../assets/products/n2.jpg'
import n3 from '../assets/products/n3.jpg'
import n4 from '../assets/products/n4.jpg'
import n5 from '../assets/products/n5.jpg'
import n6 from '../assets/products/n6.jpg'
import n7 from '../assets/products/n7.jpg'
import n8 from '../assets/products/n8.jpg'


const Shop = () => {
  return (
    <>
      <section className="page-header shop-header">
            <h2>#stayhome</h2>
            <p>Save more with coupons & up to 70% off!</p>
      </section>
      <Products heading={false} imgLinks={[f1,f2,f3,f4,f5,f6,f7,f8,n1,n2,n3,n4,n5,n6,n7,n8]}/>
      <Pagination />
      <NewsLetter />
    </>
  )
}

export default Shop