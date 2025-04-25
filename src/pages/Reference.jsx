import React, { useState } from "react";
import "../styles/Contact.css";

const Reference = () => {

    return (
        <div className="page-container">
        <h1 className="page-title">Refrences</h1>
        <p className="page-content">
            No external resources were used in the creation of this website, other than the images.
            <br/>
            All images used on this website were royalty free. This website was made using <a href="https://react.dev" className="links">React</a>.
        </p>
        <hr />
        <h2 className="page-heading">Submission Materials</h2>
        <p className="page-content">
            The links below redirect to Google Drive files. The work log was completed using a online word processor, and the student copyright cheklist was filled out in person and electronically scanned &amp; compressed in a PDF.
            <ul className="links">
            <li><a href="#" className="links">Student Copyright Cheklist</a></li>
            <li><a href="#" className="links">Work Log</a></li>
            </ul>
        </p>
        </div>
    );
}

export default Reference;