import React, { useState, useEffect } from "react";
import getTestData from "../testData";
import defaultAvatar from "../img/default-user.png";
import "./Profile.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Profile = (props) => {
	const [profileData, setData] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [locations, setLocations] = useState([]);

	useEffect(() => {
		getTestData
			.getLocations(props.id_token)
			.then((res) => {
				console.log(res);
				setLocations(res);
			})
			.catch((e) => {
				console.log("Error getting groups: " + e);
			});
	}, [props.id_token]);

	useEffect(() => {
		console.log(props.user);
		setData(props.user);
	}, [props.user]);

	return false && !props ? (
		<div>Loading</div>
	) : (
		<>
			<div id="profile-container">
				<div className="row profile" id="profile">
					<div>
						{/*<h5 class="font-weight-bold">Close</h5>*/}
						<div class="profile-sidebar">
							<div class="profile-pic">
								<img src={profileData.imageUrl} class="img-responsive" alt="" />
							</div>
							<div class="profile-name">
								<div class="profile-usertitle-name">
									<h4>{profileData.name} </h4>
								</div>
								<div class="profile-saved-locations">
									<h5>My Saved Locations:</h5>
									<p id="locations-select-guide">
										Click a group to automatically set locations in the map
									</p>
									<ul>
										{locations.map((location) => {
											return (
												<li
													className="item"
													
												>
													<h5 onClick={() =>
														props.onLocationSelect(location.origin)
													}>{location.location_name}</h5>
													{editMode && <Button variant="danger" onClick={()=>{
                                                        locations.splice(locations.indexOf(location), 1);
                                                        setLocations(locations)

                                                        getTestData.deleteLocation(location._id, props.id_token).catch(e => {
                                                            console.log('Error deleting location: ' + e);
                                                        })
                                                    }}>Delete</Button>}
												</li>
											);
										})}
									</ul>
									<Button onClick={() => setEditMode(!editMode)}>
										{editMode ? "Done" : "Edit"}
									</Button>
								</div>
							</div>
							<Button variant="link" id="delete-button">
								Delete Account Data
							</Button>
						</div>
					</div>
				</div>
				<hr class="m-3"></hr>
			</div>
		</>
	);
};

export default Profile;
