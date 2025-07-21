import './NewsLetter.css'
const NewsLetter = () => {
    return (
        <section className="section-p1 section-m1 newsletter">
            <div className="newstext">
                <h4>Sign Up for Newsletters</h4>
                <p>Get E-mail updates about out latest shop and <span>special offers.</span> </p>
            </div>
            <form>
                <input type="text" placeholder="Your email address" />
                <button className="normal" type="submit">Sign Up</button>
            </form>
        </section>
    )
}

export default NewsLetter