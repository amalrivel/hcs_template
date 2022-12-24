const Layout = (props: { children: any }) => {
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <div className="logo me-auto">
            <h1>
              <a href="index.html">Scaffold</a>
            </h1>

            <a href="index.html">
              {/* <img src={Logo} alt="" className="img-fluid" /> */}
            </a>
          </div>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>About</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a className="nav-link scrollto" href="#about">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#team">
                      Team
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#testimonials">
                      Testimonials
                    </a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link scrollto " href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div className="header-social-links d-flex align-items-center">
            <a href="#" className="twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </header>
      {props.children}

      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>Scaffold</h3>
                  <p>
                    A108 Adam Street <br />
                    NY 535022, USA
                    <br />
                    <br />
                    <strong>Phone:</strong> +1 5589 55488 55
                    <br />
                    <strong>Email:</strong> info@example.com
                    <br />
                  </p>

                  <div className="social-links mt-3">
                    <a href="#" className="twitter">
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="#" className="facebook">
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="#" className="instagram">
                      <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="#" className="google-plus">
                      <i className="bx bxl-skype"></i>
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Product Management</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Graphic Design</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Scaffold</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
