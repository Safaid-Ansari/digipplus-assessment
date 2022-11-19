import "../styles/Header.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      {/* <Link to="/"> */}
      <Link to="/home" title="home page">
        <img
          className="header__icon"
          src="https://wingslbc.files.wordpress.com/2022/02/capture.png?w=949"
          alt="digipplus logo"
        />
      </Link>

      {/* </Link> */}
      <div className="innerSpan">
        <span>
          <Link to="/home" title="home-page">
            Home{" "}
          </Link>
        </span>
        <span>
          <Link to="/myjobs" title="jobs">
            My Jobs{" "}
          </Link>
        </span>
        <span>
          <Link to="/mypayments" title="payments">
            My Payments{" "}
          </Link>
        </span>
        <span>
          <Link to="/myofferlatter" title="offerlatter">
            My OfferLatter{" "}
          </Link>
        </span>
        <span>
          <Link to="/mycertificate" title="certificate">
            My Certificate{" "}
          </Link>
        </span>
      </div>
      <div className="secondLogo">
        <img
          src="https://media-exp1.licdn.com/dms/image/C510BAQGLEMCUFDlYlw/company-logo_200_200/0/1556790275592?e=2147483647&v=beta&t=VB2QBZ6GdkIevV4PB95cP1NLFONNWuq3Zokm1peYXV8"
          alt="logo"
        ></img>
      </div>
    </div>
  );
}

export default Header;
