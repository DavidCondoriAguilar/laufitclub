import "./MainFooter.css";

export default function MainFooter() {
  return (
    <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h5>About Us</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique libero non quam suscipit, non volutpat lectus vehicula.</p>
        </div>
        <div className="col-md-4">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}
