import React from "react";
import "../styles/MyJobs.css";

function MyJobs() {
  return (
    <>
      <div className="job">
        <h5>JOBS</h5>
        <h6 className="jobApplication"> Solution Writing </h6>
        <h5> FOR JOB APPLICATION </h5>
        <h6>SCREENING TASKS</h6>
        <h5>APPLICATION STATUS</h5>
        <h6 className="jobApplication">JOB APPLICATION STATUS </h6>
      </div>
      <div className="box">
        <h6>k10 Maths Text Book Solution </h6>
        <p>intern digipplus </p>
      </div>
      <h2 className="Announcement2">
        Announcements{" "}
        <img
          src="https://cdn-icons-png.flaticon.com/512/2413/2413313.png"
          alt="
        announcment"
        ></img>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2413/2413313.png"
          alt="
        announcment"
        ></img>
      </h2>
      <div className="alert2">
        We are working on adding project<br></br> and internship details , So
        fill up<br></br> profile only{" "}
      </div>
    </>
  );
}

export default MyJobs;
