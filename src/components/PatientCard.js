import React from "react";
import "../styles/patientProfile.css";
import { MDBCard, MDBCardBody, MDBCardSubTitle } from "mdb-react-ui-kit";
import { FaMapMarkerAlt } from "react-icons/fa";
const PatientCard = () => {
	return (
		<div>
			<MDBCard className="card-container" alignment="center">
				<MDBCardBody>
					<MDBCardSubTitle>Viewing</MDBCardSubTitle>
					<h4>Hemanth K's</h4>
					<div style={{ color: "gray", fontWeight: "lighter" }}>
						ID: CUR856S4
					</div>
				</MDBCardBody>
			</MDBCard>
			<div className="container text-center mt-3">
				<div className="image-container">
					<img
						src="https://source.unsplash.com/random/100x100"
						alt="..."
						position="top"
						style={{ borderRadius: "50%" }}
					/>
				</div>
				<p className="text-patient">54. Male</p>
				<p className="text-patient">patient.sample@gmail.com</p>
				<p className="text-patient">+91 123 456 7890</p>
			</div>
		</div>
	);
};

export default PatientCard;
