import './Blog.css'
import NewsLetter from './page-components/NewsLetter'
import Pagination from './page-components/Pagination'
import i1 from '../assets/blog/b1.jpg'
import i2 from '../assets/blog/b2.jpg'
import i3 from '../assets/blog/b3.jpg'
import i4 from '../assets/blog/b4.jpg'
import i5 from '../assets/blog/b6.jpg'

const BlogBox = ({imgSrc,title="The Cotton-Jersey Zip-Up Hoodie",
  paragraph="Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony,godard...",
  date
}) =>{
  return (
    <div className="blog-box">
        <div className="blog-img">
            <img src={imgSrc} alt="" />
        </div>
        <div className="blog-details">
            <h4>{title}</h4>
            <p>{paragraph}</p>
            <a href="#">CONTINUE READING</a>
        </div>
        <h1>{date}</h1>
    </div>
  )
}

const Blog = () => {
  return (
    <>
      <section className="page-header blog-header">
            <h2>#readmore</h2>
            <p>Read all case studies about our products! </p>
      </section>
      <section className='blog'>
        <BlogBox imgSrc={i1} date='13/01'/>
        <BlogBox imgSrc={i2} date='13/04'/>
        <BlogBox imgSrc={i3} date='12/01'/>
        <BlogBox imgSrc={i4} date='16/01'/>
        <BlogBox imgSrc={i5} date='10/03'/>
      </section>
      <Pagination />
      <NewsLetter />
    </>
  )
}

export default Blog