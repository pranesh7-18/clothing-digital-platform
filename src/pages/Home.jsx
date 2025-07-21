import './Home.css'
import Feature from './page-components/Feature'
import Products from './page-components/Products'
import NewsLetter from './page-components/NewsLetter'
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

const Home = () => {
  return (
    <>
    <section className="hero">
            <h4>Trade-in-offer</h4>
            <h2>Super value deals</h2>
            <h1>On all products</h1>
            <p>Save more with coupons & up to 70% off!</p>
            <button>Shop now</button>
    </section>
    <Feature />
    <Products heading={true} title="Featured Poducts" des="Summer Collection New Modern Design" imgLinks={[f1,f2,f3,f4,f5,f6,f7,f8]}/>
    <section className="section-m1 banner">
            <h4>Repair Services</h4>
            <h2>Up to <span>70% off</span> All t-Shirts & Accessories</h2>
            <button className="normal">Explore More</button>
    </section>
    <Products heading={true} title={"New Arrival"} des={'Summer Collection New Modern Design'} imgLinks={[n1,n2,n3,n4,n5,n6,n7,n8]}/>
    <section className="sm-banner section-p1">
            <div className="banner-box">
                <h4>Crazy deals</h4>
                <h2>but1 get 1 free</h2>
                <span>The best classic dress in on sale at cara</span>
                <button className="white">Learn More</button>
            </div>
            <div className="banner-box">
                <h4>spring/summer</h4>
                <h2>upcomming season</h2>
                <span>The best classic dress in on sale at cara</span>
                <button className="white">Collection</button>
            </div>
    </section>
    <section className="banner3">
            <div className="banner-box">
                <h2>SALE SEASON</h2>
                <h3>Winter Collection -50% OFF</h3>
            </div>
            <div className="banner-box">
                <h2>SALE SEASON</h2>
                <h3>Winter Collection -50% OFF</h3>
            </div>
            <div className="banner-box">
                <h2>SALE SEASON</h2>
                <h3>Winter Collection -50% OFF</h3>
            </div>
    </section>
    <NewsLetter />
    </>
  )
}

export default Home