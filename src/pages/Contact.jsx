import './Contact.css'
import NewsLetter from './page-components/NewsLetter'
import i1 from '../assets/people/1.png'
import i2 from '../assets/people/2.png'
import i3 from '../assets/people/3.png'

const People = ({imgSrc,name,role,phone,email}) =>{
  return(
    <div>
      <img src={imgSrc} alt="face" />
      <p><span>{name}</span>{role} <br />Phone: + {phone}<br />Email: {email}</p>
    </div>
  )
}

const Contact = () => {
  return (
    <>
      <section className="page-header about-header">
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
      </section>

      <section className="contact-details section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head office</h3>
          <ul>
            <li>
              <i className="far fa-map"></i>
              <p>56 Glassford Street Glasgow G1 1UL New York</p>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <p>contact@example.com</p>
            </li>
            <li>
              <i className="far fa-phone-alt"></i>
              <p>contact@example.com</p>
            </li>
            <li>
              <i className="far fa-clock"></i>
              <p>Monday to Saturday: 9.00am to 16.pm</p>
            </li>
          </ul>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.322010367687!2d76.9496255755908!3d10.939030389219782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85bb22369d571%3A0x72cc0bed93b5b2b6!2sSri%20Krishna%20College%20of%20Engineering%20and%20Technology%20-%20SKCET!5e0!3m2!1sen!2sin!4v1751700360042!5m2!1sen!2sin"
            allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

      <section className="form-details">
        <form>
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
          <button type="submit" className="normal">Submit</button>
        </form>
        <div className="people">
          <People imgSrc={i1} name="John Doe" role="Senior Marketing Manager" phone="000 123 000 77 88" email="johndoe@example.com" />
          <People imgSrc={i2} name="William Smith" role="Senior Marketing Manager" phone="000 123 000 77 88" email="willsmith@example.com" />
          <People imgSrc={i3} name="Emma Stone" role="Senior Marketing Manager" phone="000 123 000 77 88" email="emma@example.com" />
        </div>
      </section>

      <NewsLetter />
    </>
  )
}

export default Contact