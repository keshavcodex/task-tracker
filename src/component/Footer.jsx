import "./Footer.css";

function Footer() {
  return (
    <div className="footer-distributed">
      <div className="footer-left">
        <h3>
          Task <span>Tracker</span>
        </h3>
        <p className="footer-links">
          <a href="#">Home</a>·<a href="https://dev.to/keshavcodex">Blog</a>·
          <a href="#">About</a>·<a href="#">Faq</a>·
          <a href="https://keshavcodex.github.io">Contact</a>
        </p>

        <p className="footer-company-name">keshavcodex © 2023</p>

        <div className="footer-icons">
          <a href="https://github.com/keshavcodex/">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://twitter.com/keshavcodex/">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/keshavcodex/">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="footer-right">
        <a
          href="https://mail.google.com/mail/u/0/#all?compose"
          target="_blank"
          className="home__social-icon"
        >
          <p>Contact Us: keshavcodex@gmail.com</p>
        </a>
        {/* <form action="#" method="post">

    <input type="text" name="email" placeholder="Email">
    <textarea name="message" placeholder="Message"></textarea>
    <button>Send</button>

  </form> */}
      </div>
    </div>
  );
}

export default Footer;
