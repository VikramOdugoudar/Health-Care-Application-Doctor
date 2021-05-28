import React from "react";
import "../styles/aboutpage.css";
const AboutPage = () => {
	return (
		<div className="about vw-100 vh-100 text-white">
			<div className="logo w-100 d-flex flex-column justify-content-center align-items-center">
				<div className="display-1 fw-normal">C</div>
				<p className="h1">Curilux</p>
				<p className="fs-5 h5">Doctors Application</p>
				<div className="pt-2">Version Information: 1.0.2.4</div>
			</div>
			<footer className="text-center">
				<p className="m-0">&copy; All Rights Reserved </p>
				<p>Curilux India Pvt. Ltd. 2021</p>
			</footer>
		</div>
	);
};

export default AboutPage;
