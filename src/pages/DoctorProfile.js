import React from "react";
import DoctorCard from "../components/DoctorCard";
import "../styles/doctorCard.css";
import ProfileDataDisplay from "../components/ProfileDataDisplay";
import { NavLink } from "react-router-dom";
const DoctorProfile = () => {
	return (
		<div className="container text-center  bg-green">
			
			<div className="mb-3">
			<DoctorCard />
			<ProfileDataDisplay />
			</div>
			<button className="btn mb-3 btn-warning ">
				
				<NavLink exact to="/patientProfile">View Patient Profile</NavLink>
			</button>
		</div>
	);
};

export default DoctorProfile;
