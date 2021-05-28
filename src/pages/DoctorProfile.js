import React from "react";
import DoctorCard from "../components/DoctorCard";
import "../styles/doctorCard.css";
import ProfileDataDisplay from "../components/ProfileDataDisplay";

const DoctorProfile = () => {
	return (
		<div className="container bg-green">
			<DoctorCard />
			<ProfileDataDisplay />
		</div>
	);
};

export default DoctorProfile;
