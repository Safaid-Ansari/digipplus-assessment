import React from "react";
import "../styles/Home.css";
<script
  src="https://kit.fontawesome.com/8ac657e71a.js"
  crossorigin="anonymous"
></script>;
function Home() {
  return (
    // <div className="App">
    <>
      <div className="homeImage">
        <img
          src="https://media-exp1.licdn.com/dms/image/C510BAQGLEMCUFDlYlw/company-logo_200_200/0/1556790275592?e=2147483647&v=beta&t=VB2QBZ6GdkIevV4PB95cP1NLFONNWuq3Zokm1peYXV8"
          alt="digImage"
        ></img>
      </div>
      <h2 className="mainHeading">Welcome to Digipplus</h2>
      <h2 className="Announcement">
        Announcements{" "}
        <img
          src="https://cdn-icons-png.flaticon.com/512/2413/2413313.png"
          alt="
        announcment"
        ></img>
      </h2>

      <div className="alert">
        We are working on adding project and internship details , So fill up
        profile only{" "}
      </div>

      <div className="workAction ">
        <h5> Work Action </h5>
        <div className="internData"> view intern data </div>
        <h5 className="internship">internships</h5>
      </div>

      <div className="solution">
        <h5>Solution Writing</h5>
        <p> Write Solution </p>
      </div>
    </>
  );
}

export default Home;
