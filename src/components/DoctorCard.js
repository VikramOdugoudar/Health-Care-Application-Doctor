import React from "react";
import "../styles/doctorCard.css";
import { MDBCard, MDBCardBody, MDBCardTitle } from "mdb-react-ui-kit";
import { FaMapMarkerAlt } from "react-icons/fa";
const DoctorCard = () => {
	return (
		<div>
			<MDBCard className="card-container bg-white " alignment="center">
				<MDBCardBody>
					<MDBCardTitle style={{ fontWeight: "bold" }}>
						Your Acitivty
					</MDBCardTitle>
					<div className="mb-3">
						<img
							src="https://source.unsplash.com/random/100x100"
							alt="..."
							position="top"
							style={{ borderRadius: "50%" }}
						/>
					</div>
					<h4>Dr. Vadiraj Hegde</h4>
					<div style={{ color: "gray" }}>
						<FaMapMarkerAlt /> Bangalore, Malleshwaram
					</div>
				</MDBCardBody>
			</MDBCard>
		</div>
	);
};

export default DoctorCard;
