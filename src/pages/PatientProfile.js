import React from "react";
import "../styles/patientCard.css";
import ProfileCard from "../components/ProfileCard";
import PatientCard from "../components/PatientCard";
import { NavLink } from "react-router-dom";
const PatientProfile = () => {
	return (
		<div className="container text-center bg-black">
			<PatientCard />
			<div className="patient">
			<ProfileCard
				text1="Feed"
				text2="Compliance"
				numbers1="Onco-Feed"
				numbers2="95%"
			/>
			<ProfileCard
				text1="Disease"
				text2="Feed Purchase"
				numbers1="Renal Failure"
				numbers2="60%"
			/>
			<ProfileCard
				text1="Date of Onboard"
				text2="City"
				numbers1="12/6/2020"
				numbers2="Hubballi"
			/>
			</div>
			
			<button className="btn btn-primary mb-3 ">
				
				<NavLink exact to="/doctorProfile">View Your Profile</NavLink>
			</button>
		</div>
	);
};

export default PatientProfile;
