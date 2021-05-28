import React from "react";
import ProfileCard from "./ProfileCard";
import ProfileDataCard from "./ProfileDataCard";

const ProfileDataDisplay = () => {
	return (
		<>
			<div>
				<ProfileCard
					text1="Total Patients"
					text2="Activity rating"
					numbers1="165"
					numbers2="89%"
				/>
			</div>
			<div className="text-center text-heading">
				Product Sales Details
			</div>
			<div>
				<ProfileDataCard
					text1="RT-FEED"
					text2="AB-FEED"
					numbers1="160"
					numbers2="98"
				/>
				<ProfileDataCard
					text1="QW-FEED"
					text2="ER-FEED"
					numbers1="160"
					numbers2="98"
				/>
				<ProfileDataCard
					text1="AZ-FEED"
					text2="RT-FEED"
					numbers1="160"
					numbers2="98"
				/>
				<ProfileDataCard
					text1="ON-FEED"
					text2="ED-FEED"
					numbers1="160"
					numbers2="98"
				/>
			</div>
		</>
	);
};

export default ProfileDataDisplay;
