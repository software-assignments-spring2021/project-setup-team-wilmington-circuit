import React, { useState, useEffect } from "react";
import getTestData from "../testData";
import "./Profile.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const Profile = (props) => {
	const [profileData, setData] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [locations, setLocations] = useState([]);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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
	}, [props.id_token, props.loaded]);

	useEffect(() => {
		console.log(props.user);
		setData(props.user);
	}, [props.user]);

	return false && !props ? (
		<div>Loading</div>
	) : (
		<>
			<div loaded={props.loaded} id="profile-container">
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
													<a onClick={() =>
														props.onLocationSelect(location.origin)
													}>{location.location_name}</a>
													{editMode && <Button variant="danger" onClick={()=>{
                                                        locations.splice(locations.indexOf(location), 1);
                                                        setLocations([...locations])

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
							<Button variant="link" id="delete-button" onClick={handleShow}>
								Delete Account Data
							</Button>
							<Modal show={show} onHide={handleClose}>
								<Modal.Body>Are you sure you want to delete your profile data? This will clear your saved groups and locations.</Modal.Body>
								<Modal.Footer>
									<Button variant="secondary" onClick={handleClose}>
										Cancel
									</Button>
									<Button variant="danger" onClick={() => {
										setLocations([])
										getTestData.deleteAllGroups(props.id_token).catch(e => {
											console.log('Error deleting groups');
										})
										getTestData.deleteAllLocations(props.id_token).catch(e => {
											console.log('Error deleting locations');
										})
										handleClose();
										window.location.reload()
									}}>
										Delete Account Data
									</Button>
								</Modal.Footer>
							</Modal>
						</div>
					</div>
				</div>
				<hr class="m-3"></hr>
			</div>
		</>
	);
};

export default Profile;
